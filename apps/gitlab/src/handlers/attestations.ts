import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV4ProjectsIdAttestationsAttestationIidDownloadRoute,
  getApiV4ProjectsIdAttestationsSigningCertificatesRoute,
  getApiV4ProjectsIdAttestationsSubjectDigestRoute,
} from '../routes'

const app = new OpenAPIHono()

export const attestationsHandler = app
  .openapi(getApiV4ProjectsIdAttestationsSigningCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdAttestationsSubjectDigestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdAttestationsAttestationIidDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
