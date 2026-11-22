import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteReportReportDefinitionIdRoute,
  deleteTransformTransformDefinitionIdRoute,
  getReportACTPAYINSRunRoute,
  getReportAOELIABILITYRunRoute,
  getReportDPSMSGRunRoute,
  getReportEMPSUMRunRoute,
  getReportGRO2NETRunRoute,
  getReportHOLBALRunRoute,
  getReportJOURNALRunRoute,
  getReportLASTPAYDATERunRoute,
  getReportNETPAYRunRoute,
  getReportNEXTPERIODRunRoute,
  getReportP11SUMRunRoute,
  getReportP32RunRoute,
  getReportP32SUMRunRoute,
  getReportP45RunRoute,
  getReportP60RunRoute,
  getReportPAPDISRunRoute,
  getReportPASSRunRoute,
  getReportPAYDASHBOARDRunRoute,
  getReportPAYSLIP3RunRoute,
  getReportPENLIABILITYRunRoute,
  getReportReportDefinitionIdRoute,
  getReportReportDefinitionIdRunRoute,
  getReportsRoute,
  getTransformsRoute,
  getTransformTransformDefinitionIdRoute,
  postReportsRoute,
  postTransformsRoute,
  putReportReportDefinitionIdRoute,
  putTransformTransformDefinitionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reportsHandler = app
  .openapi(getReportACTPAYINSRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportAOELIABILITYRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportDPSMSGRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportEMPSUMRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportGRO2NETRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportHOLBALRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportJOURNALRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportLASTPAYDATERunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportNETPAYRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportNEXTPERIODRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportP11SUMRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportP32RunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportP32SUMRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportP45RunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportP60RunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportPAPDISRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportPASSRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportPAYDASHBOARDRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportPAYSLIP3RunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportPENLIABILITYRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReportReportDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportReportDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReportReportDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportReportDefinitionIdRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTransformTransformDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTransformTransformDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTransformTransformDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTransformsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransformsRoute, (c) => {
    throw new Error('Not implemented')
  })
