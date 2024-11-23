const LoadingPage = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="w-1/3 mx-auto">
                <img
                    src="/images/running_raccoon.png"
                    alt="Running Raccoon"
                />
            </div>
            <h1>Loading...</h1>
            <progress className="progress progress-success w-1/3"></progress>
        </div>
    )
}

export { LoadingPage }