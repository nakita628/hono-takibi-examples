import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRecipeMultitenancyAppListRoute,
  getRecipeMultitenancyAppListV2Route,
  getRecipeMultitenancyConnectionuridomainListRoute,
  getRecipeMultitenancyConnectionuridomainListV2Route,
  postRecipeMultitenancyAppRemoveRoute,
  postRecipeMultitenancyConnectionuridomainRemoveRoute,
  postRecipeTotpDeviceImportRoute,
  putRecipeMultitenancyAppRoute,
  putRecipeMultitenancyAppV2Route,
  putRecipeMultitenancyConnectionuridomainRoute,
  putRecipeMultitenancyConnectionuridomainV2Route,
} from '../routes'

const app = new OpenAPIHono()

export const recipeHandler = app
  .openapi(postRecipeTotpDeviceImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRecipeMultitenancyConnectionuridomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRecipeMultitenancyConnectionuridomainV2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRecipeMultitenancyConnectionuridomainRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipeMultitenancyConnectionuridomainListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipeMultitenancyConnectionuridomainListV2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRecipeMultitenancyAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRecipeMultitenancyAppV2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRecipeMultitenancyAppRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipeMultitenancyAppListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipeMultitenancyAppListV2Route, (c) => {
    throw new Error('Not implemented')
  })
