import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNhArtArtworkRoute,
  getNhArtRoute,
  getNhBugsBugRoute,
  getNhBugsRoute,
  getNhClothingClothingRoute,
  getNhClothingRoute,
  getNhEventsRoute,
  getNhFishFishRoute,
  getNhFishRoute,
  getNhFossilsAllFossilRoute,
  getNhFossilsAllRoute,
  getNhFossilsGroupsFossilGroupRoute,
  getNhFossilsGroupsRoute,
  getNhFossilsIndividualsFossilRoute,
  getNhFossilsIndividualsRoute,
  getNhFurnitureFurnitureRoute,
  getNhFurnitureRoute,
  getNhInteriorItemRoute,
  getNhInteriorRoute,
  getNhItemsItemRoute,
  getNhItemsRoute,
  getNhPhotosItemRoute,
  getNhPhotosRoute,
  getNhRecipesItemRoute,
  getNhRecipesRoute,
  getNhSeaRoute,
  getNhSeaSeaCreatureRoute,
  getNhToolsRoute,
  getNhToolsToolRoute,
  getVillagersRoute,
} from './routes'
import {
  getNhArtArtworkRouteHandler,
  getNhArtRouteHandler,
  getNhBugsBugRouteHandler,
  getNhBugsRouteHandler,
  getNhClothingClothingRouteHandler,
  getNhClothingRouteHandler,
  getNhEventsRouteHandler,
  getNhFishFishRouteHandler,
  getNhFishRouteHandler,
  getNhFossilsAllFossilRouteHandler,
  getNhFossilsAllRouteHandler,
  getNhFossilsGroupsFossilGroupRouteHandler,
  getNhFossilsGroupsRouteHandler,
  getNhFossilsIndividualsFossilRouteHandler,
  getNhFossilsIndividualsRouteHandler,
  getNhFurnitureFurnitureRouteHandler,
  getNhFurnitureRouteHandler,
  getNhInteriorItemRouteHandler,
  getNhInteriorRouteHandler,
  getNhItemsItemRouteHandler,
  getNhItemsRouteHandler,
  getNhPhotosItemRouteHandler,
  getNhPhotosRouteHandler,
  getNhRecipesItemRouteHandler,
  getNhRecipesRouteHandler,
  getNhSeaRouteHandler,
  getNhSeaSeaCreatureRouteHandler,
  getNhToolsRouteHandler,
  getNhToolsToolRouteHandler,
  getVillagersRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getNhArtRoute, getNhArtRouteHandler)
  .openapi(getNhArtArtworkRoute, getNhArtArtworkRouteHandler)
  .openapi(getNhBugsRoute, getNhBugsRouteHandler)
  .openapi(getNhBugsBugRoute, getNhBugsBugRouteHandler)
  .openapi(getNhClothingRoute, getNhClothingRouteHandler)
  .openapi(getNhClothingClothingRoute, getNhClothingClothingRouteHandler)
  .openapi(getNhEventsRoute, getNhEventsRouteHandler)
  .openapi(getNhFishRoute, getNhFishRouteHandler)
  .openapi(getNhFishFishRoute, getNhFishFishRouteHandler)
  .openapi(getNhFossilsAllRoute, getNhFossilsAllRouteHandler)
  .openapi(getNhFossilsAllFossilRoute, getNhFossilsAllFossilRouteHandler)
  .openapi(getNhFossilsGroupsRoute, getNhFossilsGroupsRouteHandler)
  .openapi(getNhFossilsGroupsFossilGroupRoute, getNhFossilsGroupsFossilGroupRouteHandler)
  .openapi(getNhFossilsIndividualsRoute, getNhFossilsIndividualsRouteHandler)
  .openapi(getNhFossilsIndividualsFossilRoute, getNhFossilsIndividualsFossilRouteHandler)
  .openapi(getNhFurnitureRoute, getNhFurnitureRouteHandler)
  .openapi(getNhFurnitureFurnitureRoute, getNhFurnitureFurnitureRouteHandler)
  .openapi(getNhInteriorRoute, getNhInteriorRouteHandler)
  .openapi(getNhInteriorItemRoute, getNhInteriorItemRouteHandler)
  .openapi(getNhItemsRoute, getNhItemsRouteHandler)
  .openapi(getNhItemsItemRoute, getNhItemsItemRouteHandler)
  .openapi(getNhPhotosRoute, getNhPhotosRouteHandler)
  .openapi(getNhPhotosItemRoute, getNhPhotosItemRouteHandler)
  .openapi(getNhRecipesRoute, getNhRecipesRouteHandler)
  .openapi(getNhRecipesItemRoute, getNhRecipesItemRouteHandler)
  .openapi(getNhSeaRoute, getNhSeaRouteHandler)
  .openapi(getNhSeaSeaCreatureRoute, getNhSeaSeaCreatureRouteHandler)
  .openapi(getNhToolsRoute, getNhToolsRouteHandler)
  .openapi(getNhToolsToolRoute, getNhToolsToolRouteHandler)
  .openapi(getVillagersRoute, getVillagersRouteHandler)

export default app
