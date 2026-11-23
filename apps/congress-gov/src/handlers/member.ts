import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getMemberBioguideIdCosponsoredLegislationRoute,
  getMemberBioguideIdRoute,
  getMemberBioguideIdSponsoredLegislationRoute,
  getMemberCongressCongressRoute,
  getMemberCongressCongressStateCodeDistrictRoute,
  getMemberRoute,
  getMemberStateCodeDistrictRoute,
  getMemberStateCodeRoute,
} from '../routes'

export const getMemberRouteHandler: RouteHandler<typeof getMemberRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getMemberBioguideIdRouteHandler: RouteHandler<
  typeof getMemberBioguideIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMemberBioguideIdSponsoredLegislationRouteHandler: RouteHandler<
  typeof getMemberBioguideIdSponsoredLegislationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMemberBioguideIdCosponsoredLegislationRouteHandler: RouteHandler<
  typeof getMemberBioguideIdCosponsoredLegislationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMemberCongressCongressRouteHandler: RouteHandler<
  typeof getMemberCongressCongressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMemberStateCodeRouteHandler: RouteHandler<typeof getMemberStateCodeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getMemberStateCodeDistrictRouteHandler: RouteHandler<
  typeof getMemberStateCodeDistrictRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMemberCongressCongressStateCodeDistrictRouteHandler: RouteHandler<
  typeof getMemberCongressCongressStateCodeDistrictRoute
> = async (c) => {
  throw new Error('Not implemented')
}
