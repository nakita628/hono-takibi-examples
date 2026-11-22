import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCopilotAdminCatalogPackagesCopilotPackageDetailIdZipFileRoute,
  deleteCopilotAdminCatalogRoute,
  deleteCopilotAdminRoute,
  deleteCopilotAdminSettingsLimitedModeRoute,
  deleteCopilotAdminSettingsRoute,
  getCopilotAdminCatalogPackagesCopilotPackageDetailIdRoute,
  getCopilotAdminCatalogPackagesCopilotPackageDetailIdZipFileRoute,
  getCopilotAdminCatalogPackagesCountRoute,
  getCopilotAdminCatalogPackagesRoute,
  getCopilotAdminCatalogRoute,
  getCopilotAdminRoute,
  getCopilotAdminSettingsLimitedModeRoute,
  getCopilotAdminSettingsRoute,
  patchCopilotAdminCatalogRoute,
  patchCopilotAdminRoute,
  patchCopilotAdminSettingsLimitedModeRoute,
  patchCopilotAdminSettingsRoute,
  putCopilotAdminCatalogPackagesCopilotPackageDetailIdZipFileRoute,
} from '../routes'

const app = new OpenAPIHono()

export const copilotCopilotAdminHandler = app
  .openapi(getCopilotAdminRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCopilotAdminRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCopilotAdminRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCopilotAdminCatalogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCopilotAdminCatalogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCopilotAdminCatalogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCopilotAdminCatalogPackagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCopilotAdminCatalogPackagesCopilotPackageDetailIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCopilotAdminCatalogPackagesCopilotPackageDetailIdZipFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCopilotAdminCatalogPackagesCopilotPackageDetailIdZipFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCopilotAdminCatalogPackagesCopilotPackageDetailIdZipFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCopilotAdminCatalogPackagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCopilotAdminSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCopilotAdminSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCopilotAdminSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCopilotAdminSettingsLimitedModeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCopilotAdminSettingsLimitedModeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCopilotAdminSettingsLimitedModeRoute, (c) => {
    throw new Error('Not implemented')
  })
