export type LogoProps = {
  width?: number;
  height?: number;
  fill?: string;
}

export const Logo: FCClass<LogoProps> = ({
  width = 116,
  height = 36,
  fill = 'var(--global-vibrancy-foreground)',
  ...otherProps
}) => (
  <svg
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...otherProps}
  >
    <path
      d="M28.845 9.009l-8.408 10.025-2.104-1.422 5.404-6.453v-2.15h-2.985l-5.483 6.536-2.063-1.39 2.51-2.996v-2.15H12.73L8.28 14.32l-.13.156v3.25l13.744 9.265 9.924-11.86.035-.044V9.009h-3.007zm2.69 5.976L21.822 26.58l-13.35-9.01v-2.739l12.96 8.746L31.533 11.52v3.464zm-22.993-.49l4.336-5.168h2.52v1.717l-2.66 3.18 2.591 1.753 5.572-6.65h2.543v1.717l-5.582 6.631 2.636 1.778L28.99 9.327h2.543v1.698l-10.172 12.13-12.82-8.66z"
      fill={fill}
      stroke={fill}
    />
    <path
      d="M44.978 26.5h3.456l3.116-11.327h.07L54.724 26.5h3.456l4.486-16.903H59l-2.683 12.112h-.07L53.131 9.597h-3.104l-3.116 12.112h-.07L44.17 9.597h-3.667L44.978 26.5zm21.449.2c1.651 0 2.986-.786 3.701-2.074h.07V26.5h3.42v-8.61c0-2.53-2.096-4.205-5.34-4.205-3.316 0-5.307 1.663-5.495 3.983l-.011.14h3.127l.024-.105c.164-.808.937-1.406 2.214-1.406 1.335 0 2.061.691 2.061 1.804v.773l-3.104.188c-3.116.199-4.884 1.534-4.884 3.818v.024c0 2.214 1.698 3.795 4.217 3.795zm-.832-3.972v-.023c0-.89.69-1.453 2.015-1.535l2.588-.164v.902c0 1.312-1.124 2.296-2.659 2.296-1.183 0-1.944-.55-1.944-1.476zM75.833 26.5h3.42v-7.216c0-1.64.972-2.764 2.507-2.764 1.534 0 2.308.937 2.308 2.577V26.5h3.42v-8.106c0-2.94-1.57-4.709-4.334-4.709-1.898 0-3.186.879-3.83 2.32h-.07v-2.062h-3.421V26.5zm18.472.258c1.816 0 3.198-.914 3.866-2.402h.07V26.5h3.421V9.597h-3.42v6.525h-.07c-.68-1.523-2.086-2.437-3.867-2.437-3.162 0-5.107 2.437-5.107 6.525v.011c0 4.077 1.945 6.537 5.108 6.537zm1.148-2.835c-1.71 0-2.776-1.417-2.776-3.702v-.011c0-2.296 1.078-3.69 2.776-3.69 1.652 0 2.8 1.429 2.8 3.69v.011c0 2.273-1.136 3.702-2.8 3.702zm12.23 2.776c1.651 0 2.987-.785 3.701-2.073h.071V26.5h3.42v-8.61c0-2.53-2.097-4.205-5.341-4.205-3.316 0-5.307 1.663-5.494 3.983l-.012.14h3.128l.023-.105c.164-.808.937-1.406 2.214-1.406 1.335 0 2.062.691 2.062 1.804v.773l-3.105.188c-3.115.199-4.884 1.534-4.884 3.818v.024c0 2.214 1.698 3.795 4.217 3.795zm-.832-3.97v-.024c0-.89.691-1.453 2.015-1.535l2.589-.164v.902c0 1.312-1.125 2.296-2.659 2.296-1.184 0-1.945-.55-1.945-1.476z"
      fill={fill}
    />
  </svg>
);
