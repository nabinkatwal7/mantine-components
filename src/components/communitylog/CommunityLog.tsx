import SearchBar from "../common/Search.tsx";
import Filter from "../common/Filter.tsx";
import {data} from "../../data/communityData.ts";
import LogCard from "../common/LogCard.tsx";
import { Pagination } from '@mantine/core';


function CommunityLog() {
    return (
        <div className={" main-container p-4"} >
            <div className={"header-container flex flex-row justify-between items-center"} >
                <div className={"header-content flex flex-row gap-2 items-center"} >
                    <p className={"font-bold text-xl"} >Community Log</p>
                    <p className={"text-xs"} >10th Jan 2024, 10:00 AM</p>
                </div>
                <div className={"header-content flex flex-row gap-2"} >
                    <SearchBar />
                    <Filter />
                </div>
            </div>
            <div className={"tab-container"} ></div>
            <div className={"content-container flex flex-col gap-2"} >
                {data?.map((item) => {
                    return (
                        <div key={item.id} className={"content-item bg-[#f4f4f4] rounded-sm"} >
                            <LogCard id={item.id} name={item.name} image={item.image} description={item.description} guard={item.guard} gate={item.gate} />
                        </div>
                    );
                })}
            </div>
            <div className={"flex justify-end"} >
                <Pagination total={10} withEdges size="sm" />
            </div>
        </div>
    );
}

export default CommunityLog;
