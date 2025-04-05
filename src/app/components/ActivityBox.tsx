'use client'

import { IconType } from "react-icons"

type ActivityBoxProps = {
    name: string
    icon: IconType
}

export default function ActivityBox({name, icon: Icon} : ActivityBoxProps){
    return (
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition flex flex-col items-start text-left">
            <div className="flex items-center gap-3 mb-2">
                <Icon className="text-[#082B3D] w-5 h-5" />
                <h3 className="text-xl font-semibold text-[#082B3D]">{name}</h3>
            </div>
        </div>
    )
}