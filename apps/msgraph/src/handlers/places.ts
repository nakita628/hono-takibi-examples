import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deletePlacesPlaceIdCheckInsCheckInClaimCalendarEventIdRoute,
  deletePlacesPlaceIdGraphBuildingCheckInsCheckInClaimCalendarEventIdRoute,
  deletePlacesPlaceIdGraphBuildingMapFootprintsFootprintMapIdRoute,
  deletePlacesPlaceIdGraphBuildingMapLevelsLevelMapIdFixturesFixtureMapIdRoute,
  deletePlacesPlaceIdGraphBuildingMapLevelsLevelMapIdRoute,
  deletePlacesPlaceIdGraphBuildingMapLevelsLevelMapIdSectionsSectionMapIdRoute,
  deletePlacesPlaceIdGraphBuildingMapLevelsLevelMapIdUnitsUnitMapIdRoute,
  deletePlacesPlaceIdGraphBuildingMapRoute,
  deletePlacesPlaceIdGraphDeskCheckInsCheckInClaimCalendarEventIdRoute,
  deletePlacesPlaceIdGraphFloorCheckInsCheckInClaimCalendarEventIdRoute,
  deletePlacesPlaceIdGraphRoomCheckInsCheckInClaimCalendarEventIdRoute,
  deletePlacesPlaceIdGraphRoomListCheckInsCheckInClaimCalendarEventIdRoute,
  deletePlacesPlaceIdGraphRoomListRoomsRoomIdCheckInsCheckInClaimCalendarEventIdRoute,
  deletePlacesPlaceIdGraphRoomListRoomsRoomIdRoute,
  deletePlacesPlaceIdGraphRoomListWorkspacesWorkspaceIdCheckInsCheckInClaimCalendarEventIdRoute,
  deletePlacesPlaceIdGraphRoomListWorkspacesWorkspaceIdRoute,
  deletePlacesPlaceIdGraphSectionCheckInsCheckInClaimCalendarEventIdRoute,
  deletePlacesPlaceIdGraphWorkspaceCheckInsCheckInClaimCalendarEventIdRoute,
  deletePlacesPlaceIdRoute,
  getPlacesCountRoute,
  getPlacesGraphBuildingCountRoute,
  getPlacesGraphBuildingRoute,
  getPlacesGraphDeskCountRoute,
  getPlacesGraphDeskRoute,
  getPlacesGraphFloorCountRoute,
  getPlacesGraphFloorRoute,
  getPlacesGraphRoomCountRoute,
  getPlacesGraphRoomListCountRoute,
  getPlacesGraphRoomListRoute,
  getPlacesGraphRoomRoute,
  getPlacesGraphSectionCountRoute,
  getPlacesGraphSectionRoute,
  getPlacesGraphWorkspaceCountRoute,
  getPlacesGraphWorkspaceRoute,
  getPlacesPlaceIdCheckInsCheckInClaimCalendarEventIdRoute,
  getPlacesPlaceIdCheckInsCountRoute,
  getPlacesPlaceIdCheckInsRoute,
  getPlacesPlaceIdDescendantsRoute,
  getPlacesPlaceIdGraphBuildingCheckInsCheckInClaimCalendarEventIdRoute,
  getPlacesPlaceIdGraphBuildingCheckInsCountRoute,
  getPlacesPlaceIdGraphBuildingCheckInsRoute,
  getPlacesPlaceIdGraphBuildingMapFootprintsCountRoute,
  getPlacesPlaceIdGraphBuildingMapFootprintsFootprintMapIdRoute,
  getPlacesPlaceIdGraphBuildingMapFootprintsRoute,
  getPlacesPlaceIdGraphBuildingMapLevelsCountRoute,
  getPlacesPlaceIdGraphBuildingMapLevelsLevelMapIdFixturesCountRoute,
  getPlacesPlaceIdGraphBuildingMapLevelsLevelMapIdFixturesFixtureMapIdRoute,
  getPlacesPlaceIdGraphBuildingMapLevelsLevelMapIdFixturesRoute,
  getPlacesPlaceIdGraphBuildingMapLevelsLevelMapIdRoute,
  getPlacesPlaceIdGraphBuildingMapLevelsLevelMapIdSectionsCountRoute,
  getPlacesPlaceIdGraphBuildingMapLevelsLevelMapIdSectionsRoute,
  getPlacesPlaceIdGraphBuildingMapLevelsLevelMapIdSectionsSectionMapIdRoute,
  getPlacesPlaceIdGraphBuildingMapLevelsLevelMapIdUnitsCountRoute,
  getPlacesPlaceIdGraphBuildingMapLevelsLevelMapIdUnitsRoute,
  getPlacesPlaceIdGraphBuildingMapLevelsLevelMapIdUnitsUnitMapIdRoute,
  getPlacesPlaceIdGraphBuildingMapLevelsRoute,
  getPlacesPlaceIdGraphBuildingMapRoute,
  getPlacesPlaceIdGraphBuildingRoute,
  getPlacesPlaceIdGraphDeskCheckInsCheckInClaimCalendarEventIdRoute,
  getPlacesPlaceIdGraphDeskCheckInsCountRoute,
  getPlacesPlaceIdGraphDeskCheckInsRoute,
  getPlacesPlaceIdGraphDeskRoute,
  getPlacesPlaceIdGraphFloorCheckInsCheckInClaimCalendarEventIdRoute,
  getPlacesPlaceIdGraphFloorCheckInsCountRoute,
  getPlacesPlaceIdGraphFloorCheckInsRoute,
  getPlacesPlaceIdGraphFloorRoute,
  getPlacesPlaceIdGraphRoomCheckInsCheckInClaimCalendarEventIdRoute,
  getPlacesPlaceIdGraphRoomCheckInsCountRoute,
  getPlacesPlaceIdGraphRoomCheckInsRoute,
  getPlacesPlaceIdGraphRoomListCheckInsCheckInClaimCalendarEventIdRoute,
  getPlacesPlaceIdGraphRoomListCheckInsCountRoute,
  getPlacesPlaceIdGraphRoomListCheckInsRoute,
  getPlacesPlaceIdGraphRoomListRoomsCountRoute,
  getPlacesPlaceIdGraphRoomListRoomsRoomIdCheckInsCheckInClaimCalendarEventIdRoute,
  getPlacesPlaceIdGraphRoomListRoomsRoomIdCheckInsCountRoute,
  getPlacesPlaceIdGraphRoomListRoomsRoomIdCheckInsRoute,
  getPlacesPlaceIdGraphRoomListRoomsRoomIdRoute,
  getPlacesPlaceIdGraphRoomListRoomsRoute,
  getPlacesPlaceIdGraphRoomListRoute,
  getPlacesPlaceIdGraphRoomListWorkspacesCountRoute,
  getPlacesPlaceIdGraphRoomListWorkspacesRoute,
  getPlacesPlaceIdGraphRoomListWorkspacesWorkspaceIdCheckInsCheckInClaimCalendarEventIdRoute,
  getPlacesPlaceIdGraphRoomListWorkspacesWorkspaceIdCheckInsCountRoute,
  getPlacesPlaceIdGraphRoomListWorkspacesWorkspaceIdCheckInsRoute,
  getPlacesPlaceIdGraphRoomListWorkspacesWorkspaceIdRoute,
  getPlacesPlaceIdGraphRoomRoute,
  getPlacesPlaceIdGraphSectionCheckInsCheckInClaimCalendarEventIdRoute,
  getPlacesPlaceIdGraphSectionCheckInsCountRoute,
  getPlacesPlaceIdGraphSectionCheckInsRoute,
  getPlacesPlaceIdGraphSectionRoute,
  getPlacesPlaceIdGraphWorkspaceCheckInsCheckInClaimCalendarEventIdRoute,
  getPlacesPlaceIdGraphWorkspaceCheckInsCountRoute,
  getPlacesPlaceIdGraphWorkspaceCheckInsRoute,
  getPlacesPlaceIdGraphWorkspaceRoute,
  patchPlacesPlaceIdCheckInsCheckInClaimCalendarEventIdRoute,
  patchPlacesPlaceIdGraphBuildingCheckInsCheckInClaimCalendarEventIdRoute,
  patchPlacesPlaceIdGraphBuildingMapFootprintsFootprintMapIdRoute,
  patchPlacesPlaceIdGraphBuildingMapLevelsLevelMapIdFixturesFixtureMapIdRoute,
  patchPlacesPlaceIdGraphBuildingMapLevelsLevelMapIdRoute,
  patchPlacesPlaceIdGraphBuildingMapLevelsLevelMapIdSectionsSectionMapIdRoute,
  patchPlacesPlaceIdGraphBuildingMapLevelsLevelMapIdUnitsUnitMapIdRoute,
  patchPlacesPlaceIdGraphBuildingMapRoute,
  patchPlacesPlaceIdGraphDeskCheckInsCheckInClaimCalendarEventIdRoute,
  patchPlacesPlaceIdGraphFloorCheckInsCheckInClaimCalendarEventIdRoute,
  patchPlacesPlaceIdGraphRoomCheckInsCheckInClaimCalendarEventIdRoute,
  patchPlacesPlaceIdGraphRoomListCheckInsCheckInClaimCalendarEventIdRoute,
  patchPlacesPlaceIdGraphRoomListRoomsRoomIdCheckInsCheckInClaimCalendarEventIdRoute,
  patchPlacesPlaceIdGraphRoomListRoomsRoomIdRoute,
  patchPlacesPlaceIdGraphRoomListWorkspacesWorkspaceIdCheckInsCheckInClaimCalendarEventIdRoute,
  patchPlacesPlaceIdGraphRoomListWorkspacesWorkspaceIdRoute,
  patchPlacesPlaceIdGraphSectionCheckInsCheckInClaimCalendarEventIdRoute,
  patchPlacesPlaceIdGraphWorkspaceCheckInsCheckInClaimCalendarEventIdRoute,
  patchPlacesPlaceIdRoute,
  postPlacesPlaceIdCheckInsRoute,
  postPlacesPlaceIdGraphBuildingCheckInsRoute,
  postPlacesPlaceIdGraphBuildingMapFootprintsRoute,
  postPlacesPlaceIdGraphBuildingMapLevelsLevelMapIdFixturesRoute,
  postPlacesPlaceIdGraphBuildingMapLevelsLevelMapIdSectionsRoute,
  postPlacesPlaceIdGraphBuildingMapLevelsLevelMapIdUnitsRoute,
  postPlacesPlaceIdGraphBuildingMapLevelsRoute,
  postPlacesPlaceIdGraphDeskCheckInsRoute,
  postPlacesPlaceIdGraphFloorCheckInsRoute,
  postPlacesPlaceIdGraphRoomCheckInsRoute,
  postPlacesPlaceIdGraphRoomListCheckInsRoute,
  postPlacesPlaceIdGraphRoomListRoomsRoomIdCheckInsRoute,
  postPlacesPlaceIdGraphRoomListRoomsRoute,
  postPlacesPlaceIdGraphRoomListWorkspacesRoute,
  postPlacesPlaceIdGraphRoomListWorkspacesWorkspaceIdCheckInsRoute,
  postPlacesPlaceIdGraphSectionCheckInsRoute,
  postPlacesPlaceIdGraphWorkspaceCheckInsRoute,
  postPlacesRoute,
} from '../routes'

export const postPlacesRouteHandler: RouteHandler<typeof postPlacesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPlacesPlaceIdRouteHandler: RouteHandler<typeof patchPlacesPlaceIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deletePlacesPlaceIdRouteHandler: RouteHandler<
  typeof deletePlacesPlaceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesPlaceIdCheckInsRouteHandler: RouteHandler<
  typeof getPlacesPlaceIdCheckInsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPlacesPlaceIdCheckInsRouteHandler: RouteHandler<
  typeof postPlacesPlaceIdCheckInsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesPlaceIdCheckInsCheckInClaimCalendarEventIdRouteHandler: RouteHandler<
  typeof getPlacesPlaceIdCheckInsCheckInClaimCalendarEventIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPlacesPlaceIdCheckInsCheckInClaimCalendarEventIdRouteHandler: RouteHandler<
  typeof patchPlacesPlaceIdCheckInsCheckInClaimCalendarEventIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePlacesPlaceIdCheckInsCheckInClaimCalendarEventIdRouteHandler: RouteHandler<
  typeof deletePlacesPlaceIdCheckInsCheckInClaimCalendarEventIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesPlaceIdCheckInsCountRouteHandler: RouteHandler<
  typeof getPlacesPlaceIdCheckInsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesPlaceIdGraphBuildingRouteHandler: RouteHandler<
  typeof getPlacesPlaceIdGraphBuildingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesPlaceIdGraphBuildingCheckInsRouteHandler: RouteHandler<
  typeof getPlacesPlaceIdGraphBuildingCheckInsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPlacesPlaceIdGraphBuildingCheckInsRouteHandler: RouteHandler<
  typeof postPlacesPlaceIdGraphBuildingCheckInsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesPlaceIdGraphBuildingCheckInsCheckInClaimCalendarEventIdRouteHandler: RouteHandler<
  typeof getPlacesPlaceIdGraphBuildingCheckInsCheckInClaimCalendarEventIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPlacesPlaceIdGraphBuildingCheckInsCheckInClaimCalendarEventIdRouteHandler: RouteHandler<
  typeof patchPlacesPlaceIdGraphBuildingCheckInsCheckInClaimCalendarEventIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePlacesPlaceIdGraphBuildingCheckInsCheckInClaimCalendarEventIdRouteHandler: RouteHandler<
  typeof deletePlacesPlaceIdGraphBuildingCheckInsCheckInClaimCalendarEventIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesPlaceIdGraphBuildingCheckInsCountRouteHandler: RouteHandler<
  typeof getPlacesPlaceIdGraphBuildingCheckInsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesPlaceIdGraphBuildingMapRouteHandler: RouteHandler<
  typeof getPlacesPlaceIdGraphBuildingMapRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPlacesPlaceIdGraphBuildingMapRouteHandler: RouteHandler<
  typeof patchPlacesPlaceIdGraphBuildingMapRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePlacesPlaceIdGraphBuildingMapRouteHandler: RouteHandler<
  typeof deletePlacesPlaceIdGraphBuildingMapRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesPlaceIdGraphBuildingMapFootprintsRouteHandler: RouteHandler<
  typeof getPlacesPlaceIdGraphBuildingMapFootprintsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPlacesPlaceIdGraphBuildingMapFootprintsRouteHandler: RouteHandler<
  typeof postPlacesPlaceIdGraphBuildingMapFootprintsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesPlaceIdGraphBuildingMapFootprintsFootprintMapIdRouteHandler: RouteHandler<
  typeof getPlacesPlaceIdGraphBuildingMapFootprintsFootprintMapIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPlacesPlaceIdGraphBuildingMapFootprintsFootprintMapIdRouteHandler: RouteHandler<
  typeof patchPlacesPlaceIdGraphBuildingMapFootprintsFootprintMapIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePlacesPlaceIdGraphBuildingMapFootprintsFootprintMapIdRouteHandler: RouteHandler<
  typeof deletePlacesPlaceIdGraphBuildingMapFootprintsFootprintMapIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesPlaceIdGraphBuildingMapFootprintsCountRouteHandler: RouteHandler<
  typeof getPlacesPlaceIdGraphBuildingMapFootprintsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesPlaceIdGraphBuildingMapLevelsRouteHandler: RouteHandler<
  typeof getPlacesPlaceIdGraphBuildingMapLevelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPlacesPlaceIdGraphBuildingMapLevelsRouteHandler: RouteHandler<
  typeof postPlacesPlaceIdGraphBuildingMapLevelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesPlaceIdGraphBuildingMapLevelsLevelMapIdRouteHandler: RouteHandler<
  typeof getPlacesPlaceIdGraphBuildingMapLevelsLevelMapIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPlacesPlaceIdGraphBuildingMapLevelsLevelMapIdRouteHandler: RouteHandler<
  typeof patchPlacesPlaceIdGraphBuildingMapLevelsLevelMapIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePlacesPlaceIdGraphBuildingMapLevelsLevelMapIdRouteHandler: RouteHandler<
  typeof deletePlacesPlaceIdGraphBuildingMapLevelsLevelMapIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesPlaceIdGraphBuildingMapLevelsLevelMapIdFixturesRouteHandler: RouteHandler<
  typeof getPlacesPlaceIdGraphBuildingMapLevelsLevelMapIdFixturesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPlacesPlaceIdGraphBuildingMapLevelsLevelMapIdFixturesRouteHandler: RouteHandler<
  typeof postPlacesPlaceIdGraphBuildingMapLevelsLevelMapIdFixturesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesPlaceIdGraphBuildingMapLevelsLevelMapIdFixturesFixtureMapIdRouteHandler: RouteHandler<
  typeof getPlacesPlaceIdGraphBuildingMapLevelsLevelMapIdFixturesFixtureMapIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPlacesPlaceIdGraphBuildingMapLevelsLevelMapIdFixturesFixtureMapIdRouteHandler: RouteHandler<
  typeof patchPlacesPlaceIdGraphBuildingMapLevelsLevelMapIdFixturesFixtureMapIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePlacesPlaceIdGraphBuildingMapLevelsLevelMapIdFixturesFixtureMapIdRouteHandler: RouteHandler<
  typeof deletePlacesPlaceIdGraphBuildingMapLevelsLevelMapIdFixturesFixtureMapIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesPlaceIdGraphBuildingMapLevelsLevelMapIdFixturesCountRouteHandler: RouteHandler<
  typeof getPlacesPlaceIdGraphBuildingMapLevelsLevelMapIdFixturesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesPlaceIdGraphBuildingMapLevelsLevelMapIdSectionsRouteHandler: RouteHandler<
  typeof getPlacesPlaceIdGraphBuildingMapLevelsLevelMapIdSectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPlacesPlaceIdGraphBuildingMapLevelsLevelMapIdSectionsRouteHandler: RouteHandler<
  typeof postPlacesPlaceIdGraphBuildingMapLevelsLevelMapIdSectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesPlaceIdGraphBuildingMapLevelsLevelMapIdSectionsSectionMapIdRouteHandler: RouteHandler<
  typeof getPlacesPlaceIdGraphBuildingMapLevelsLevelMapIdSectionsSectionMapIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPlacesPlaceIdGraphBuildingMapLevelsLevelMapIdSectionsSectionMapIdRouteHandler: RouteHandler<
  typeof patchPlacesPlaceIdGraphBuildingMapLevelsLevelMapIdSectionsSectionMapIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePlacesPlaceIdGraphBuildingMapLevelsLevelMapIdSectionsSectionMapIdRouteHandler: RouteHandler<
  typeof deletePlacesPlaceIdGraphBuildingMapLevelsLevelMapIdSectionsSectionMapIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesPlaceIdGraphBuildingMapLevelsLevelMapIdSectionsCountRouteHandler: RouteHandler<
  typeof getPlacesPlaceIdGraphBuildingMapLevelsLevelMapIdSectionsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesPlaceIdGraphBuildingMapLevelsLevelMapIdUnitsRouteHandler: RouteHandler<
  typeof getPlacesPlaceIdGraphBuildingMapLevelsLevelMapIdUnitsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPlacesPlaceIdGraphBuildingMapLevelsLevelMapIdUnitsRouteHandler: RouteHandler<
  typeof postPlacesPlaceIdGraphBuildingMapLevelsLevelMapIdUnitsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesPlaceIdGraphBuildingMapLevelsLevelMapIdUnitsUnitMapIdRouteHandler: RouteHandler<
  typeof getPlacesPlaceIdGraphBuildingMapLevelsLevelMapIdUnitsUnitMapIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPlacesPlaceIdGraphBuildingMapLevelsLevelMapIdUnitsUnitMapIdRouteHandler: RouteHandler<
  typeof patchPlacesPlaceIdGraphBuildingMapLevelsLevelMapIdUnitsUnitMapIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePlacesPlaceIdGraphBuildingMapLevelsLevelMapIdUnitsUnitMapIdRouteHandler: RouteHandler<
  typeof deletePlacesPlaceIdGraphBuildingMapLevelsLevelMapIdUnitsUnitMapIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesPlaceIdGraphBuildingMapLevelsLevelMapIdUnitsCountRouteHandler: RouteHandler<
  typeof getPlacesPlaceIdGraphBuildingMapLevelsLevelMapIdUnitsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesPlaceIdGraphBuildingMapLevelsCountRouteHandler: RouteHandler<
  typeof getPlacesPlaceIdGraphBuildingMapLevelsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesPlaceIdDescendantsRouteHandler: RouteHandler<
  typeof getPlacesPlaceIdDescendantsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesPlaceIdGraphDeskRouteHandler: RouteHandler<
  typeof getPlacesPlaceIdGraphDeskRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesPlaceIdGraphDeskCheckInsRouteHandler: RouteHandler<
  typeof getPlacesPlaceIdGraphDeskCheckInsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPlacesPlaceIdGraphDeskCheckInsRouteHandler: RouteHandler<
  typeof postPlacesPlaceIdGraphDeskCheckInsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesPlaceIdGraphDeskCheckInsCheckInClaimCalendarEventIdRouteHandler: RouteHandler<
  typeof getPlacesPlaceIdGraphDeskCheckInsCheckInClaimCalendarEventIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPlacesPlaceIdGraphDeskCheckInsCheckInClaimCalendarEventIdRouteHandler: RouteHandler<
  typeof patchPlacesPlaceIdGraphDeskCheckInsCheckInClaimCalendarEventIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePlacesPlaceIdGraphDeskCheckInsCheckInClaimCalendarEventIdRouteHandler: RouteHandler<
  typeof deletePlacesPlaceIdGraphDeskCheckInsCheckInClaimCalendarEventIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesPlaceIdGraphDeskCheckInsCountRouteHandler: RouteHandler<
  typeof getPlacesPlaceIdGraphDeskCheckInsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesPlaceIdGraphFloorRouteHandler: RouteHandler<
  typeof getPlacesPlaceIdGraphFloorRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesPlaceIdGraphFloorCheckInsRouteHandler: RouteHandler<
  typeof getPlacesPlaceIdGraphFloorCheckInsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPlacesPlaceIdGraphFloorCheckInsRouteHandler: RouteHandler<
  typeof postPlacesPlaceIdGraphFloorCheckInsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesPlaceIdGraphFloorCheckInsCheckInClaimCalendarEventIdRouteHandler: RouteHandler<
  typeof getPlacesPlaceIdGraphFloorCheckInsCheckInClaimCalendarEventIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPlacesPlaceIdGraphFloorCheckInsCheckInClaimCalendarEventIdRouteHandler: RouteHandler<
  typeof patchPlacesPlaceIdGraphFloorCheckInsCheckInClaimCalendarEventIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePlacesPlaceIdGraphFloorCheckInsCheckInClaimCalendarEventIdRouteHandler: RouteHandler<
  typeof deletePlacesPlaceIdGraphFloorCheckInsCheckInClaimCalendarEventIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesPlaceIdGraphFloorCheckInsCountRouteHandler: RouteHandler<
  typeof getPlacesPlaceIdGraphFloorCheckInsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesPlaceIdGraphRoomRouteHandler: RouteHandler<
  typeof getPlacesPlaceIdGraphRoomRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesPlaceIdGraphRoomCheckInsRouteHandler: RouteHandler<
  typeof getPlacesPlaceIdGraphRoomCheckInsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPlacesPlaceIdGraphRoomCheckInsRouteHandler: RouteHandler<
  typeof postPlacesPlaceIdGraphRoomCheckInsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesPlaceIdGraphRoomCheckInsCheckInClaimCalendarEventIdRouteHandler: RouteHandler<
  typeof getPlacesPlaceIdGraphRoomCheckInsCheckInClaimCalendarEventIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPlacesPlaceIdGraphRoomCheckInsCheckInClaimCalendarEventIdRouteHandler: RouteHandler<
  typeof patchPlacesPlaceIdGraphRoomCheckInsCheckInClaimCalendarEventIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePlacesPlaceIdGraphRoomCheckInsCheckInClaimCalendarEventIdRouteHandler: RouteHandler<
  typeof deletePlacesPlaceIdGraphRoomCheckInsCheckInClaimCalendarEventIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesPlaceIdGraphRoomCheckInsCountRouteHandler: RouteHandler<
  typeof getPlacesPlaceIdGraphRoomCheckInsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesPlaceIdGraphRoomListRouteHandler: RouteHandler<
  typeof getPlacesPlaceIdGraphRoomListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesPlaceIdGraphRoomListCheckInsRouteHandler: RouteHandler<
  typeof getPlacesPlaceIdGraphRoomListCheckInsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPlacesPlaceIdGraphRoomListCheckInsRouteHandler: RouteHandler<
  typeof postPlacesPlaceIdGraphRoomListCheckInsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesPlaceIdGraphRoomListCheckInsCheckInClaimCalendarEventIdRouteHandler: RouteHandler<
  typeof getPlacesPlaceIdGraphRoomListCheckInsCheckInClaimCalendarEventIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPlacesPlaceIdGraphRoomListCheckInsCheckInClaimCalendarEventIdRouteHandler: RouteHandler<
  typeof patchPlacesPlaceIdGraphRoomListCheckInsCheckInClaimCalendarEventIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePlacesPlaceIdGraphRoomListCheckInsCheckInClaimCalendarEventIdRouteHandler: RouteHandler<
  typeof deletePlacesPlaceIdGraphRoomListCheckInsCheckInClaimCalendarEventIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesPlaceIdGraphRoomListCheckInsCountRouteHandler: RouteHandler<
  typeof getPlacesPlaceIdGraphRoomListCheckInsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesPlaceIdGraphRoomListRoomsRouteHandler: RouteHandler<
  typeof getPlacesPlaceIdGraphRoomListRoomsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPlacesPlaceIdGraphRoomListRoomsRouteHandler: RouteHandler<
  typeof postPlacesPlaceIdGraphRoomListRoomsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesPlaceIdGraphRoomListRoomsRoomIdRouteHandler: RouteHandler<
  typeof getPlacesPlaceIdGraphRoomListRoomsRoomIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPlacesPlaceIdGraphRoomListRoomsRoomIdRouteHandler: RouteHandler<
  typeof patchPlacesPlaceIdGraphRoomListRoomsRoomIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePlacesPlaceIdGraphRoomListRoomsRoomIdRouteHandler: RouteHandler<
  typeof deletePlacesPlaceIdGraphRoomListRoomsRoomIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesPlaceIdGraphRoomListRoomsRoomIdCheckInsRouteHandler: RouteHandler<
  typeof getPlacesPlaceIdGraphRoomListRoomsRoomIdCheckInsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPlacesPlaceIdGraphRoomListRoomsRoomIdCheckInsRouteHandler: RouteHandler<
  typeof postPlacesPlaceIdGraphRoomListRoomsRoomIdCheckInsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesPlaceIdGraphRoomListRoomsRoomIdCheckInsCheckInClaimCalendarEventIdRouteHandler: RouteHandler<
  typeof getPlacesPlaceIdGraphRoomListRoomsRoomIdCheckInsCheckInClaimCalendarEventIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPlacesPlaceIdGraphRoomListRoomsRoomIdCheckInsCheckInClaimCalendarEventIdRouteHandler: RouteHandler<
  typeof patchPlacesPlaceIdGraphRoomListRoomsRoomIdCheckInsCheckInClaimCalendarEventIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePlacesPlaceIdGraphRoomListRoomsRoomIdCheckInsCheckInClaimCalendarEventIdRouteHandler: RouteHandler<
  typeof deletePlacesPlaceIdGraphRoomListRoomsRoomIdCheckInsCheckInClaimCalendarEventIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesPlaceIdGraphRoomListRoomsRoomIdCheckInsCountRouteHandler: RouteHandler<
  typeof getPlacesPlaceIdGraphRoomListRoomsRoomIdCheckInsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesPlaceIdGraphRoomListRoomsCountRouteHandler: RouteHandler<
  typeof getPlacesPlaceIdGraphRoomListRoomsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesPlaceIdGraphRoomListWorkspacesRouteHandler: RouteHandler<
  typeof getPlacesPlaceIdGraphRoomListWorkspacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPlacesPlaceIdGraphRoomListWorkspacesRouteHandler: RouteHandler<
  typeof postPlacesPlaceIdGraphRoomListWorkspacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesPlaceIdGraphRoomListWorkspacesWorkspaceIdRouteHandler: RouteHandler<
  typeof getPlacesPlaceIdGraphRoomListWorkspacesWorkspaceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPlacesPlaceIdGraphRoomListWorkspacesWorkspaceIdRouteHandler: RouteHandler<
  typeof patchPlacesPlaceIdGraphRoomListWorkspacesWorkspaceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePlacesPlaceIdGraphRoomListWorkspacesWorkspaceIdRouteHandler: RouteHandler<
  typeof deletePlacesPlaceIdGraphRoomListWorkspacesWorkspaceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesPlaceIdGraphRoomListWorkspacesWorkspaceIdCheckInsRouteHandler: RouteHandler<
  typeof getPlacesPlaceIdGraphRoomListWorkspacesWorkspaceIdCheckInsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPlacesPlaceIdGraphRoomListWorkspacesWorkspaceIdCheckInsRouteHandler: RouteHandler<
  typeof postPlacesPlaceIdGraphRoomListWorkspacesWorkspaceIdCheckInsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesPlaceIdGraphRoomListWorkspacesWorkspaceIdCheckInsCheckInClaimCalendarEventIdRouteHandler: RouteHandler<
  typeof getPlacesPlaceIdGraphRoomListWorkspacesWorkspaceIdCheckInsCheckInClaimCalendarEventIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPlacesPlaceIdGraphRoomListWorkspacesWorkspaceIdCheckInsCheckInClaimCalendarEventIdRouteHandler: RouteHandler<
  typeof patchPlacesPlaceIdGraphRoomListWorkspacesWorkspaceIdCheckInsCheckInClaimCalendarEventIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePlacesPlaceIdGraphRoomListWorkspacesWorkspaceIdCheckInsCheckInClaimCalendarEventIdRouteHandler: RouteHandler<
  typeof deletePlacesPlaceIdGraphRoomListWorkspacesWorkspaceIdCheckInsCheckInClaimCalendarEventIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesPlaceIdGraphRoomListWorkspacesWorkspaceIdCheckInsCountRouteHandler: RouteHandler<
  typeof getPlacesPlaceIdGraphRoomListWorkspacesWorkspaceIdCheckInsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesPlaceIdGraphRoomListWorkspacesCountRouteHandler: RouteHandler<
  typeof getPlacesPlaceIdGraphRoomListWorkspacesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesPlaceIdGraphSectionRouteHandler: RouteHandler<
  typeof getPlacesPlaceIdGraphSectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesPlaceIdGraphSectionCheckInsRouteHandler: RouteHandler<
  typeof getPlacesPlaceIdGraphSectionCheckInsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPlacesPlaceIdGraphSectionCheckInsRouteHandler: RouteHandler<
  typeof postPlacesPlaceIdGraphSectionCheckInsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesPlaceIdGraphSectionCheckInsCheckInClaimCalendarEventIdRouteHandler: RouteHandler<
  typeof getPlacesPlaceIdGraphSectionCheckInsCheckInClaimCalendarEventIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPlacesPlaceIdGraphSectionCheckInsCheckInClaimCalendarEventIdRouteHandler: RouteHandler<
  typeof patchPlacesPlaceIdGraphSectionCheckInsCheckInClaimCalendarEventIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePlacesPlaceIdGraphSectionCheckInsCheckInClaimCalendarEventIdRouteHandler: RouteHandler<
  typeof deletePlacesPlaceIdGraphSectionCheckInsCheckInClaimCalendarEventIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesPlaceIdGraphSectionCheckInsCountRouteHandler: RouteHandler<
  typeof getPlacesPlaceIdGraphSectionCheckInsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesPlaceIdGraphWorkspaceRouteHandler: RouteHandler<
  typeof getPlacesPlaceIdGraphWorkspaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesPlaceIdGraphWorkspaceCheckInsRouteHandler: RouteHandler<
  typeof getPlacesPlaceIdGraphWorkspaceCheckInsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPlacesPlaceIdGraphWorkspaceCheckInsRouteHandler: RouteHandler<
  typeof postPlacesPlaceIdGraphWorkspaceCheckInsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesPlaceIdGraphWorkspaceCheckInsCheckInClaimCalendarEventIdRouteHandler: RouteHandler<
  typeof getPlacesPlaceIdGraphWorkspaceCheckInsCheckInClaimCalendarEventIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPlacesPlaceIdGraphWorkspaceCheckInsCheckInClaimCalendarEventIdRouteHandler: RouteHandler<
  typeof patchPlacesPlaceIdGraphWorkspaceCheckInsCheckInClaimCalendarEventIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePlacesPlaceIdGraphWorkspaceCheckInsCheckInClaimCalendarEventIdRouteHandler: RouteHandler<
  typeof deletePlacesPlaceIdGraphWorkspaceCheckInsCheckInClaimCalendarEventIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesPlaceIdGraphWorkspaceCheckInsCountRouteHandler: RouteHandler<
  typeof getPlacesPlaceIdGraphWorkspaceCheckInsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesCountRouteHandler: RouteHandler<typeof getPlacesCountRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesGraphBuildingRouteHandler: RouteHandler<
  typeof getPlacesGraphBuildingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesGraphBuildingCountRouteHandler: RouteHandler<
  typeof getPlacesGraphBuildingCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesGraphDeskRouteHandler: RouteHandler<typeof getPlacesGraphDeskRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getPlacesGraphDeskCountRouteHandler: RouteHandler<
  typeof getPlacesGraphDeskCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesGraphFloorRouteHandler: RouteHandler<
  typeof getPlacesGraphFloorRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesGraphFloorCountRouteHandler: RouteHandler<
  typeof getPlacesGraphFloorCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesGraphRoomRouteHandler: RouteHandler<typeof getPlacesGraphRoomRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getPlacesGraphRoomCountRouteHandler: RouteHandler<
  typeof getPlacesGraphRoomCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesGraphRoomListRouteHandler: RouteHandler<
  typeof getPlacesGraphRoomListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesGraphRoomListCountRouteHandler: RouteHandler<
  typeof getPlacesGraphRoomListCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesGraphSectionRouteHandler: RouteHandler<
  typeof getPlacesGraphSectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesGraphSectionCountRouteHandler: RouteHandler<
  typeof getPlacesGraphSectionCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesGraphWorkspaceRouteHandler: RouteHandler<
  typeof getPlacesGraphWorkspaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesGraphWorkspaceCountRouteHandler: RouteHandler<
  typeof getPlacesGraphWorkspaceCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}
