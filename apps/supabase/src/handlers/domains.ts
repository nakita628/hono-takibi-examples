import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ProjectsRefCustomHostnameRoute,
  deleteV1ProjectsRefVanitySubdomainRoute,
  getV1ProjectsRefCustomHostnameRoute,
  getV1ProjectsRefVanitySubdomainRoute,
  postV1ProjectsRefCustomHostnameActivateRoute,
  postV1ProjectsRefCustomHostnameInitializeRoute,
  postV1ProjectsRefCustomHostnameReverifyRoute,
  postV1ProjectsRefVanitySubdomainActivateRoute,
  postV1ProjectsRefVanitySubdomainCheckAvailabilityRoute,
} from '../routes'

const app = new OpenAPIHono()

export const domainsHandler = app
  .openapi(getV1ProjectsRefCustomHostnameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsRefCustomHostnameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefCustomHostnameInitializeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefCustomHostnameReverifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefCustomHostnameActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefVanitySubdomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsRefVanitySubdomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefVanitySubdomainCheckAvailabilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefVanitySubdomainActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
