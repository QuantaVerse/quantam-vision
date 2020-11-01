export enum RouteEnum {
    DefaultRoute = "/",
    DataHoundRoute = "/datahound",
    WatchDogRoute = "/watchdog",
    ParrotRoute = "/parrot",
    OtherRoute = "*"
}

export enum DataHoundRouteEnum {
    DefaultRoute = "/datahound/",
    DashboardRoute = "/datahound/dashboard",
    JobsRoute = "/datahound/jobs",
    DataRoute = "/datahound/data",
    OtherRoute = "/datahound/*"
}

export enum NotFoundComponentType {
    Page = "Page",
    Item = "Item"
}

export enum UnderConstructionComponentType {
    Page = "Page",
    Item = "Item"
}
