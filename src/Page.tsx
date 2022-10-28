import PageData from "./interface/PageData";

type PageProp = {
  data: PageData;
};

export default function Page(props: PageProp) {
  const { data } = props;

  return (
    <div>
      <h1>{data.header}</h1>
      <h2>{data.subHeader}</h2>
      <p>{data.description}</p>
    </div>
  );
}
