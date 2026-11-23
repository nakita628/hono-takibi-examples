import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getMedicalConditionRoute,
  getMedicalConditionSearchRoute,
  postMedicalConditionSearchRoute,
} from '../routes'

export const getMedicalConditionRouteHandler: RouteHandler<
  typeof getMedicalConditionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMedicalConditionSearchRouteHandler: RouteHandler<
  typeof getMedicalConditionSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMedicalConditionSearchRouteHandler: RouteHandler<
  typeof postMedicalConditionSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}
