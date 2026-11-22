import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1AppInfosIdAgeRatingDeclarationRoute,
  getV1AppInfosIdAppInfoLocalizationsRoute,
  getV1AppInfosIdPrimaryCategoryRoute,
  getV1AppInfosIdPrimarySubcategoryOneRoute,
  getV1AppInfosIdPrimarySubcategoryTwoRoute,
  getV1AppInfosIdRoute,
  getV1AppInfosIdSecondaryCategoryRoute,
  getV1AppInfosIdSecondarySubcategoryOneRoute,
  getV1AppInfosIdSecondarySubcategoryTwoRoute,
  patchV1AppInfosIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const appInfosHandler = app
  .openapi(getV1AppInfosIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1AppInfosIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppInfosIdAgeRatingDeclarationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppInfosIdAppInfoLocalizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppInfosIdPrimaryCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppInfosIdPrimarySubcategoryOneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppInfosIdPrimarySubcategoryTwoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppInfosIdSecondaryCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppInfosIdSecondarySubcategoryOneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppInfosIdSecondarySubcategoryTwoRoute, (c) => {
    throw new Error('Not implemented')
  })
