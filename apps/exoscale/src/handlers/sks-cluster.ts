import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSksClusterIdNodepoolSksNodepoolIdRoute,
  deleteSksClusterIdRoute,
  getSksClusterIdAuthorityAuthorityCertRoute,
  getSksClusterIdInspectionRoute,
  getSksClusterIdNodepoolSksNodepoolIdRoute,
  getSksClusterIdRoute,
  getSksClusterRoute,
  postSksClusterIdNodepoolRoute,
  postSksClusterRoute,
  putSksClusterIdGenerateKarpenterExoscaleNodeclassRoute,
  putSksClusterIdGenerateKarpenterNodepoolRoute,
  putSksClusterIdNodepoolSksNodepoolIdEvictRoute,
  putSksClusterIdNodepoolSksNodepoolIdRoute,
  putSksClusterIdNodepoolSksNodepoolIdScaleRoute,
  putSksClusterIdRotateCcmCredentialsRoute,
  putSksClusterIdRotateCsiCredentialsRoute,
  putSksClusterIdRotateKarpenterCredentialsRoute,
  putSksClusterIdRotateOperatorsCaRoute,
  putSksClusterIdRoute,
  putSksClusterIdUpgradeRoute,
  putSksClusterIdUpgradeServiceLevelRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sksClusterHandler = app
  .openapi(putSksClusterIdNodepoolSksNodepoolIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSksClusterIdNodepoolSksNodepoolIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSksClusterIdNodepoolSksNodepoolIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSksClusterIdAuthorityAuthorityCertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSksClusterIdNodepoolSksNodepoolIdScaleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSksClusterIdUpgradeServiceLevelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSksClusterIdRotateCsiCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSksClusterIdNodepoolSksNodepoolIdEvictRoute, (c) => {
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
  .openapi(postSksClusterIdNodepoolRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSksClusterIdRotateKarpenterCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSksClusterIdRotateOperatorsCaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSksClusterIdUpgradeRoute, (c) => {
    throw new Error('Not implemented')
  })
