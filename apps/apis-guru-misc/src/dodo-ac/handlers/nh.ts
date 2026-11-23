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
} from '../routes'

const app = new OpenAPIHono()

export const nhHandler = app
  .openapi(getNhArtRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNhArtArtworkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNhBugsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNhBugsBugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNhClothingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNhClothingClothingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNhEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNhFishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNhFishFishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNhFossilsAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNhFossilsAllFossilRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNhFossilsGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNhFossilsGroupsFossilGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNhFossilsIndividualsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNhFossilsIndividualsFossilRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNhFurnitureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNhFurnitureFurnitureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNhInteriorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNhInteriorItemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNhItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNhItemsItemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNhPhotosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNhPhotosItemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNhRecipesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNhRecipesItemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNhSeaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNhSeaSeaCreatureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNhToolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNhToolsToolRoute, (c) => {
    throw new Error('Not implemented')
  })
