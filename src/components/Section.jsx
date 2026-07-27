function Section({
  title,
  children,
  titleContainer: TitleContainer = "h2",
  titleProps,
  ...props
}) {
  return (
    <section {...props}>
      <TitleContainer {...titleProps}>{title}</TitleContainer>
      {children}
    </section>
  );
}

export default Section;
