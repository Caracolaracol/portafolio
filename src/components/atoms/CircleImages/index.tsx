import { Suspense } from 'react'


export default function CircleImages() {

    return (
        <div className='relative flex h-full w-full items-end justify-center rounded-full'>
            <Suspense fallback={null}>
                <img
                    alt="Myself with nature background"
                    src={"/images/yo2.jpg"}
                    className="circle_img_1"
                />
                <img
                    alt="Myself with other nature background "
                    className="circle_img_2"
                    src={"/images/yo.jpg"}
                />
            </Suspense>
        </div>
    )
}

