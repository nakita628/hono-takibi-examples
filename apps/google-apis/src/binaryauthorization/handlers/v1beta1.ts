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
} from '../routes'

const app = new OpenAPIHono()

export const v1beta1Handler = app
  .openapi(postV1beta1AttestorValidateAttestationOccurrenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentAttestorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentAttestorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ResourceGetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ResourceSetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ResourceTestIamPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
