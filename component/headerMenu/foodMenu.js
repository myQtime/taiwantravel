export default function foodMenu(props) {
    return (
        <>
            <ul
                className={`hover-menu list-inline row justify-content-center  position-absolute w-100 bg"+ ${props.class}`}
            >
                <div className="col-7 d-flex justify-content-center my-3">
                    <li className="list-inline-item col m-0">
                        <button
                            type="button"
                            className="btn btn-link shadow-none color-text text-decoration-none px-4 color-menu-icon-stroke"
                        >
                            <svg
                                width="60"
                                height="60"
                                viewBox="0 0 60 60"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M19.332 16.464C19.38 16.248 19.428 16.02 19.5 15.804C20.604 12.36 24.3 10.464 27.744 11.58C31.188 12.696 33.084 16.38 31.968 19.824C31.56 21.084 30.816 22.14 29.856 22.908"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M22.944 16.464C23.604 15.096 25.2 14.376 26.688 14.856C28.32 15.384 29.208 17.136 28.692 18.756C28.572 19.116 28.392 19.44 28.176 19.728"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M35.832 27.384L45.708 15.444L48.276 18.024L40.752 27.168"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M31.164 27.408L44.412 11.268L46.992 13.836L35.88 27.408"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M30.012 23.04L40.032 10.8L42.612 13.368L31.116 27.408"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M40.848 27.072L46.284 20.652L48.864 23.232L45.492 27.072"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M12.432 27.132C12.312 26.412 12.252 26.076 12.252 25.452C12.252 20.484 16.272 16.464 21.24 16.464C26.208 16.464 30.228 20.484 30.228 25.452C30.228 26.052 30.168 26.376 30.06 27.072"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M15.984 27.384C15.768 26.784 15.648 26.136 15.648 25.464C15.648 22.38 18.156 19.872 21.24 19.872C24.324 19.872 26.832 22.38 26.832 25.464C26.832 26.16 26.7 26.82 26.472 27.432"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M39.984 44.976H19.512C14.04 44.976 9.60001 35.772 9.60001 30.3V27.408H49.896V30.3C49.896 35.772 45.456 44.976 39.984 44.976Z"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M40.308 44.976H19.188V48.684H40.308V44.976Z"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M12.756 31.596H46.74"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>

                            <p className="m-0 fs-6 text-nowrap color-text">飽餐一頓</p>
                        </button>
                    </li>
                    <li className="list-inline-item col m-0">
                        <button
                            type="button"
                            className="btn btn-link shadow-none color-text text-decoration-none px-4 color-menu-icon-stroke"
                        >
                            <svg
                                width="60"
                                height="60"
                                viewBox="0 0 60 60"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M36.384 50.196H22.596L19.2 19.332H39.78L36.384 50.196Z"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M31.776 47.82L36.456 10.8H41.928"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M19.788 24.66H39.096"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M28.464 39.564C29.3985 39.564 30.156 38.8065 30.156 37.872C30.156 36.9375 29.3985 36.18 28.464 36.18C27.5296 36.18 26.772 36.9375 26.772 37.872C26.772 38.8065 27.5296 39.564 28.464 39.564Z"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M26.076 32.964C27.322 32.964 28.332 31.954 28.332 30.708C28.332 29.462 27.322 28.452 26.076 28.452C24.83 28.452 23.82 29.462 23.82 30.708C23.82 31.954 24.83 32.964 26.076 32.964Z"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>

                            <p className="m-0 fs-6 text-nowrap color-text">清涼消暑</p>
                        </button>
                    </li>
                    <li className="list-inline-item col m-0">
                        <button
                            type="button"
                            className="btn btn-link shadow-none color-text text-decoration-none px-4 color-menu-icon-stroke"
                        >
                            <svg
                                width="60"
                                height="60"
                                viewBox="0 0 60 60"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M29.604 45.792C38.6637 45.792 46.008 38.4477 46.008 29.388C46.008 20.3283 38.6637 12.984 29.604 12.984C20.5443 12.984 13.2 20.3283 13.2 29.388C13.2 38.4477 20.5443 45.792 29.604 45.792Z"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M29.604 45.792C38.6637 45.792 46.008 38.4477 46.008 29.388C46.008 20.3283 38.6637 12.984 29.604 12.984C20.5443 12.984 13.2 20.3283 13.2 29.388C13.2 38.4477 20.5443 45.792 29.604 45.792Z"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M29.604 43.068C37.1593 43.068 43.284 36.9433 43.284 29.388C43.284 21.8327 37.1593 15.708 29.604 15.708C22.0487 15.708 15.924 21.8327 15.924 29.388C15.924 36.9433 22.0487 43.068 29.604 43.068Z"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M30.6 20.16C32.352 20.868 32.448 24.372 30.816 27.972C29.184 31.572 24.684 33.204 24.684 33.204C24.684 33.204 22.836 28.992 24.468 25.392C26.1 21.792 28.848 19.452 30.6 20.16Z"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M24.24 33.216L21.6 34.644C21.216 34.848 21.252 35.4 21.648 35.568L25.008 36.936C25.392 37.092 25.8 36.744 25.692 36.336L24.972 33.54C24.9 33.216 24.528 33.06 24.24 33.216Z"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M40.08 10.8L29.604 48.684"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M43.296 11.544L32.82 49.44"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>

                            <p className="m-0 fs-6 text-nowrap color-text">在地美味</p>
                        </button>
                    </li>
                    <li className="list-inline-item col m-0">
                        <button
                            type="button"
                            className="btn btn-link shadow-none color-text text-decoration-none px-4 color-menu-icon-stroke"
                        >
                            <svg
                                width="60"
                                height="60"
                                viewBox="0 0 60 60"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M19.068 47.244H12V17.928H34.8V32.58"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M35.64 33.612L42.264 30.492L47.352 41.436H19.068L30.468 36.06"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M47.352 41.436H19.068V50.196H47.352V41.436Z"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M33.216 37.728C34.7536 37.728 36 36.4816 36 34.944C36 33.4064 34.7536 32.16 33.216 32.16C31.6785 32.16 30.432 33.4064 30.432 34.944C30.432 36.4816 31.6785 37.728 33.216 37.728Z"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M23.4 10.8C21.432 10.8 19.836 12.396 19.836 14.364V17.76C19.836 17.856 19.908 17.928 20.004 17.928H26.784C26.88 17.928 26.952 17.856 26.952 17.76V14.364C26.964 12.396 25.368 10.8 23.4 10.8Z"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M12 22.476H34.248"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>

                            <p className="m-0 fs-6 text-nowrap color-text">特色名產</p>
                        </button>
                    </li>
                </div>
            </ul>
        </>
    )
}
