interface ErrorBaseProps {
    message: string;
}

const ErrorBase: React.FC<ErrorBaseProps> = ({ message }) => {
    return (
        <div className="flex h-screen w-screen justify-center">
            <div className="flex flex-col items-center m-10">
                <h1 className="text-9xl font-bold">{message}</h1>
                {message === "404" ? <h1 className="text-4xl font-bold underline justify-between">Not Found</h1> : null}
            </div>
        </div>
    )
}

export { ErrorBase }