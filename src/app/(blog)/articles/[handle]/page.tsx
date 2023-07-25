import {draftMode} from "next/headers";

export default function ArticlePage({
    params
                                }: {
    params: {
       handle: string
    }
}) {
    const { isEnabled } = draftMode();
    return (
        <div>
            <code>{isEnabled ? 'Enabled' : 'Disabled'}</code>
            <h1>文章页面 : { params.handle }</h1>
        </div>
    )

}
