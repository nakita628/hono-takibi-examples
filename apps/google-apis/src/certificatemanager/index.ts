import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  getV1NameLocationsRoute,
  getV1NameOperationsRoute,
  getV1NameRoute,
  getV1ParentCertificateIssuanceConfigsRoute,
  getV1ParentCertificateMapEntriesRoute,
  getV1ParentCertificateMapsRoute,
  getV1ParentCertificatesRoute,
  getV1ParentDnsAuthorizationsRoute,
  getV1ParentTrustConfigsRoute,
  patchV1NameRoute,
  postV1NameCancelRoute,
  postV1ParentCertificateIssuanceConfigsRoute,
  postV1ParentCertificateMapEntriesRoute,
  postV1ParentCertificateMapsRoute,
  postV1ParentCertificatesRoute,
  postV1ParentDnsAuthorizationsRoute,
  postV1ParentTrustConfigsRoute,
} from './routes'
import {
  deleteV1NameRouteHandler,
  getV1NameLocationsRouteHandler,
  getV1NameOperationsRouteHandler,
  getV1NameRouteHandler,
  getV1ParentCertificateIssuanceConfigsRouteHandler,
  getV1ParentCertificateMapEntriesRouteHandler,
  getV1ParentCertificateMapsRouteHandler,
  getV1ParentCertificatesRouteHandler,
  getV1ParentDnsAuthorizationsRouteHandler,
  getV1ParentTrustConfigsRouteHandler,
  patchV1NameRouteHandler,
  postV1NameCancelRouteHandler,
  postV1ParentCertificateIssuanceConfigsRouteHandler,
  postV1ParentCertificateMapEntriesRouteHandler,
  postV1ParentCertificateMapsRouteHandler,
  postV1ParentCertificatesRouteHandler,
  postV1ParentDnsAuthorizationsRouteHandler,
  postV1ParentTrustConfigsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV1NameRoute, deleteV1NameRouteHandler)
  .openapi(getV1NameRoute, getV1NameRouteHandler)
  .openapi(patchV1NameRoute, patchV1NameRouteHandler)
  .openapi(getV1NameLocationsRoute, getV1NameLocationsRouteHandler)
  .openapi(getV1NameOperationsRoute, getV1NameOperationsRouteHandler)
  .openapi(postV1NameCancelRoute, postV1NameCancelRouteHandler)
  .openapi(
    getV1ParentCertificateIssuanceConfigsRoute,
    getV1ParentCertificateIssuanceConfigsRouteHandler,
  )
  .openapi(
    postV1ParentCertificateIssuanceConfigsRoute,
    postV1ParentCertificateIssuanceConfigsRouteHandler,
  )
  .openapi(getV1ParentCertificateMapEntriesRoute, getV1ParentCertificateMapEntriesRouteHandler)
  .openapi(postV1ParentCertificateMapEntriesRoute, postV1ParentCertificateMapEntriesRouteHandler)
  .openapi(getV1ParentCertificateMapsRoute, getV1ParentCertificateMapsRouteHandler)
  .openapi(postV1ParentCertificateMapsRoute, postV1ParentCertificateMapsRouteHandler)
  .openapi(getV1ParentCertificatesRoute, getV1ParentCertificatesRouteHandler)
  .openapi(postV1ParentCertificatesRoute, postV1ParentCertificatesRouteHandler)
  .openapi(getV1ParentDnsAuthorizationsRoute, getV1ParentDnsAuthorizationsRouteHandler)
  .openapi(postV1ParentDnsAuthorizationsRoute, postV1ParentDnsAuthorizationsRouteHandler)
  .openapi(getV1ParentTrustConfigsRoute, getV1ParentTrustConfigsRouteHandler)
  .openapi(postV1ParentTrustConfigsRoute, postV1ParentTrustConfigsRouteHandler)

export default app
