function TableHeader() {
    return (
        <div className="border border-gray-200">
            <div className="flex justify-start gap-6 m-3">
                <input type="checkbox" name="" id="" className="" />
                <div className="flex w-full text-gray-600">
                    <div className="flex-1">Name</div>
                    <div className="flex-1">Email</div>
                    <div className="flex-1">Role</div>
                    <div className="flex-1">Action</div>
                </div>
            </div>
        </div>
    )
}

export default TableHeader;