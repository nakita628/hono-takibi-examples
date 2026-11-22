import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMemberBioguideIdCosponsoredLegislationRoute,
  getMemberBioguideIdRoute,
  getMemberBioguideIdSponsoredLegislationRoute,
  getMemberCongressCongressRoute,
  getMemberCongressCongressStateCodeDistrictRoute,
  getMemberRoute,
  getMemberStateCodeDistrictRoute,
  getMemberStateCodeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const memberHandler = app
  .openapi(getMemberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMemberBioguideIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMemberBioguideIdSponsoredLegislationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMemberBioguideIdCosponsoredLegislationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMemberCongressCongressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMemberStateCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMemberStateCodeDistrictRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMemberCongressCongressStateCodeDistrictRoute, (c) => {
    throw new Error('Not implemented')
  })
