import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
 
interface OnlyForOptions {
  /**
   * The properties to check for
   */
  properties: string[];
}
 
export default ((opts?: Partial<OnlyForOptions>, component?: QuartzComponent) => {
  if (component) {
    const Component = component
 
    function OnlyFor(props: QuartzComponentProps) {
      const hasAllProperties = opts?.properties?.every(
        property => (props.fileData.frontmatter?.[property] === true
          || props.fileData.frontmatter?.[property] === "true")
      );
 
      return hasAllProperties ? <Component {...props} /> : <></>;
    }
 
    OnlyFor.displayName = component.displayName
    OnlyFor.afterDOMLoaded = component.afterDOMLoaded
    OnlyFor.beforeDOMLoaded = component.beforeDOMLoaded
    OnlyFor.css = component.css
    return OnlyFor
  } else {
    return () => <></>
  }
}) satisfies QuartzComponentConstructor