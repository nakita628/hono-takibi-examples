import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSksClusterIdRoute,
  getSksClusterDeprecatedResourcesIdRoute,
  getSksClusterIdAuthorityAuthorityCertRoute,
  getSksClusterIdInspectionRoute,
  getSksClusterIdRoute,
  getSksClusterRoute,
  getSksClusterVersionRoute,
  postSksClusterKubeconfigIdRoute,
  postSksClusterRoute,
  putSksClusterIdGenerateKarpenterExoscaleNodeclassRoute,
  putSksClusterIdGenerateKarpenterNodepoolRoute,
  putSksClusterIdRotateCcmCredentialsRoute,
  putSksClusterIdRotateCsiCredentialsRoute,
  putSksClusterIdRotateKarpenterCredentialsRoute,
  putSksClusterIdRotateOperatorsCaRoute,
  putSksClusterIdRoute,
  putSksClusterIdUpgradeRoute,
  putSksClusterIdUpgradeServiceLevelRoute,
} from '../routes'

const app = new OpenAPIHono()

export const clusterHandler = app
  .openapi(postSksClusterKubeconfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSksClusterIdAuthorityAuthorityCertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSksClusterDeprecatedResourcesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSksClusterIdUpgradeServiceLevelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSksClusterIdRotateCsiCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSksClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSksClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSksClusterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSksClusterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSksClusterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSksClusterIdInspectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSksClusterIdRotateCcmCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSksClusterIdGenerateKarpenterNodepoolRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSksClusterIdGenerateKarpenterExoscaleNodeclassRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSksClusterIdRotateKarpenterCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSksClusterIdRotateOperatorsCaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSksClusterVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSksClusterIdUpgradeRoute, (c) => {
    throw new Error('Not implemented')
  })
