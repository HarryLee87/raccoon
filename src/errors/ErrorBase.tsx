interface ErrorBaseProps {
    message: string;
}

const ErrorBase: React.FC<ErrorBaseProps> = ({ message }) => {
    return (
        <div>
            <h1>{message}</h1>
        </div>
    )
}

export { ErrorBase }