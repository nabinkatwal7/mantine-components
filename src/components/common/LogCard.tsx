function LogCard({id, name, image, description, guard, gate}:{id:number, name:string, image:string, description:string, guard:string, gate:string}) {
    return (
        <div className={"flex flex-col gap-2 p-2"} >
            <div  className={"flex flex-row gap-2"}>
                <img src={image} alt={"image"} className={"w-10 h-10 rounded-full"} />
                <div className={"flex flex-row gap-1"} >
                    <p className={"font-bold capitalize"}>{name}</p>
                    <p>{description}</p>
                </div>
            </div>
            <div className={"flex flex-row gap-2"} >
                <p>Allowed By: {guard}</p>
                <p>{gate}</p>
            </div>
        </div>
    );
}

export default LogCard;
