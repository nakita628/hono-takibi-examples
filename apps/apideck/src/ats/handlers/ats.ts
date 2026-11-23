import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAtsApplicantsIdRoute,
  getAtsApplicantsRoute,
  getAtsJobsIdRoute,
  getAtsJobsRoute,
  postAtsApplicantsRoute,
} from '../routes'

export const getAtsApplicantsRouteHandler: RouteHandler<typeof getAtsApplicantsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postAtsApplicantsRouteHandler: RouteHandler<typeof postAtsApplicantsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getAtsApplicantsIdRouteHandler: RouteHandler<typeof getAtsApplicantsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getAtsJobsRouteHandler: RouteHandler<typeof getAtsJobsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAtsJobsIdRouteHandler: RouteHandler<typeof getAtsJobsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
