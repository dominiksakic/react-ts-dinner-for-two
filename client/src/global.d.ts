interface ComponentProps {
  classname: string;
}
export interface CopyrightProps
  extends React.ComponentPropsWithoutRef<typeof Typography> {
  sx: {
    mt: number;
    mb: number;
  };
}
