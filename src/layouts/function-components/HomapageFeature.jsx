import { humanize } from "@/lib/utils/textConverter";
import * as Icon from "react-feather";
import { AiFillCheckCircle } from "react-icons/ai";

const HomapageFeature = ({ feature_list }) => {
  return (
    <div className="key-feature-grid mt-10 grid grid-cols-2 gap-7 md:grid-cols-3 xl:grid-cols-4">
      {feature_list.map((item, i) => {
        const FeatherIcon = Icon[humanize(item.icon)];
        return (
          <div
            key={i}
            className="flex flex-col rounded-xl bg-white p-4 md:p-8 shadow-xl"
          >
            <div className="text-center flex flex-col items-center justify-center">
              <h3 className="text-sm md:text-base font-black flex items-center justify-center gap-x-1">
                <AiFillCheckCircle className=" fill-primary text-white hidden md:block" />
                {item.title}
              </h3>
              <p className="text-balance">{item.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HomapageFeature;
