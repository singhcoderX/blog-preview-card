type Props = {};
import illustration from "./assets/illustration-article.svg";

const Blog = (props: Props) => {
  return (
    <div className="w-[384px] h-[522px] rounded-[20px] bg-[#FFFFFF] border  border-black box-shadow">
      {/* Header */}
      <div className="p-[24px]">
        <img src={illustration} alt="" className="rounded-[10px]" />
      </div>
      {/* Body  */}
      <div></div>
    </div>
  );
};

export default Blog;
