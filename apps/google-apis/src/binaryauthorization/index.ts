import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1beta1NameRoute,
  getV1beta1NameRoute,
  getV1beta1ParentAttestorsRoute,
  getV1beta1ResourceGetIamPolicyRoute,
  postV1beta1AttestorValidateAttestationOccurrenceRoute,
  postV1beta1ParentAttestorsRoute,
  postV1beta1ResourceSetIamPolicyRoute,
  postV1beta1ResourceTestIamPermissionsRoute,
  putV1beta1NameRoute,
} from './routes'
import {
  deleteV1beta1NameRouteHandler,
  getV1beta1NameRouteHandler,
  getV1beta1ParentAttestorsRouteHandler,
  getV1beta1ResourceGetIamPolicyRouteHandler,
  postV1beta1AttestorValidateAttestationOccurrenceRouteHandler,
  postV1beta1ParentAttestorsRouteHandler,
  postV1beta1ResourceSetIamPolicyRouteHandler,
  postV1beta1ResourceTestIamPermissionsRouteHandler,
  putV1beta1NameRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postV1beta1AttestorValidateAttestationOccurrenceRoute,
    postV1beta1AttestorValidateAttestationOccurrenceRouteHandler,
  )
  .openapi(deleteV1beta1NameRoute, deleteV1beta1NameRouteHandler)
  .openapi(getV1beta1NameRoute, getV1beta1NameRouteHandler)
  .openapi(putV1beta1NameRoute, putV1beta1NameRouteHandler)
  .openapi(getV1beta1ParentAttestorsRoute, getV1beta1ParentAttestorsRouteHandler)
  .openapi(postV1beta1ParentAttestorsRoute, postV1beta1ParentAttestorsRouteHandler)
  .openapi(getV1beta1ResourceGetIamPolicyRoute, getV1beta1ResourceGetIamPolicyRouteHandler)
  .openapi(postV1beta1ResourceSetIamPolicyRoute, postV1beta1ResourceSetIamPolicyRouteHandler)
  .openapi(
    postV1beta1ResourceTestIamPermissionsRoute,
    postV1beta1ResourceTestIamPermissionsRouteHandler,
  )

export default app
