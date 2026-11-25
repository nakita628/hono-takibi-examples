import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCatalogsRoute,
  postCatalogsRoute,
  getCatalogsCatalogNameRoute,
  putCatalogsCatalogNameRoute,
  deleteCatalogsCatalogNameRoute,
  getPrincipalsRoute,
  postPrincipalsRoute,
  getPrincipalsPrincipalNameRoute,
  putPrincipalsPrincipalNameRoute,
  deletePrincipalsPrincipalNameRoute,
  postPrincipalsPrincipalNameRotateRoute,
  postPrincipalsPrincipalNameResetRoute,
  getPrincipalsPrincipalNamePrincipalRolesRoute,
  putPrincipalsPrincipalNamePrincipalRolesRoute,
  deletePrincipalsPrincipalNamePrincipalRolesPrincipalRoleNameRoute,
  getPrincipalRolesRoute,
  postPrincipalRolesRoute,
  getPrincipalRolesPrincipalRoleNameRoute,
  putPrincipalRolesPrincipalRoleNameRoute,
  deletePrincipalRolesPrincipalRoleNameRoute,
  getPrincipalRolesPrincipalRoleNamePrincipalsRoute,
  getPrincipalRolesPrincipalRoleNameCatalogRolesCatalogNameRoute,
  putPrincipalRolesPrincipalRoleNameCatalogRolesCatalogNameRoute,
  deletePrincipalRolesPrincipalRoleNameCatalogRolesCatalogNameCatalogRoleNameRoute,
  getCatalogsCatalogNameCatalogRolesRoute,
  postCatalogsCatalogNameCatalogRolesRoute,
  getCatalogsCatalogNameCatalogRolesCatalogRoleNameRoute,
  putCatalogsCatalogNameCatalogRolesCatalogRoleNameRoute,
  deleteCatalogsCatalogNameCatalogRolesCatalogRoleNameRoute,
  getCatalogsCatalogNameCatalogRolesCatalogRoleNamePrincipalRolesRoute,
  getCatalogsCatalogNameCatalogRolesCatalogRoleNameGrantsRoute,
  putCatalogsCatalogNameCatalogRolesCatalogRoleNameGrantsRoute,
  postCatalogsCatalogNameCatalogRolesCatalogRoleNameGrantsRoute,
} from './routes'
import {
  getCatalogsRouteHandler,
  postCatalogsRouteHandler,
  getCatalogsCatalogNameRouteHandler,
  putCatalogsCatalogNameRouteHandler,
  deleteCatalogsCatalogNameRouteHandler,
  getPrincipalsRouteHandler,
  postPrincipalsRouteHandler,
  getPrincipalsPrincipalNameRouteHandler,
  putPrincipalsPrincipalNameRouteHandler,
  deletePrincipalsPrincipalNameRouteHandler,
  postPrincipalsPrincipalNameRotateRouteHandler,
  postPrincipalsPrincipalNameResetRouteHandler,
  getPrincipalsPrincipalNamePrincipalRolesRouteHandler,
  putPrincipalsPrincipalNamePrincipalRolesRouteHandler,
  deletePrincipalsPrincipalNamePrincipalRolesPrincipalRoleNameRouteHandler,
  getPrincipalRolesRouteHandler,
  postPrincipalRolesRouteHandler,
  getPrincipalRolesPrincipalRoleNameRouteHandler,
  putPrincipalRolesPrincipalRoleNameRouteHandler,
  deletePrincipalRolesPrincipalRoleNameRouteHandler,
  getPrincipalRolesPrincipalRoleNamePrincipalsRouteHandler,
  getPrincipalRolesPrincipalRoleNameCatalogRolesCatalogNameRouteHandler,
  putPrincipalRolesPrincipalRoleNameCatalogRolesCatalogNameRouteHandler,
  deletePrincipalRolesPrincipalRoleNameCatalogRolesCatalogNameCatalogRoleNameRouteHandler,
  getCatalogsCatalogNameCatalogRolesRouteHandler,
  postCatalogsCatalogNameCatalogRolesRouteHandler,
  getCatalogsCatalogNameCatalogRolesCatalogRoleNameRouteHandler,
  putCatalogsCatalogNameCatalogRolesCatalogRoleNameRouteHandler,
  deleteCatalogsCatalogNameCatalogRolesCatalogRoleNameRouteHandler,
  getCatalogsCatalogNameCatalogRolesCatalogRoleNamePrincipalRolesRouteHandler,
  getCatalogsCatalogNameCatalogRolesCatalogRoleNameGrantsRouteHandler,
  putCatalogsCatalogNameCatalogRolesCatalogRoleNameGrantsRouteHandler,
  postCatalogsCatalogNameCatalogRolesCatalogRoleNameGrantsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCatalogsRoute, getCatalogsRouteHandler)
  .openapi(postCatalogsRoute, postCatalogsRouteHandler)
  .openapi(getCatalogsCatalogNameRoute, getCatalogsCatalogNameRouteHandler)
  .openapi(putCatalogsCatalogNameRoute, putCatalogsCatalogNameRouteHandler)
  .openapi(deleteCatalogsCatalogNameRoute, deleteCatalogsCatalogNameRouteHandler)
  .openapi(getPrincipalsRoute, getPrincipalsRouteHandler)
  .openapi(postPrincipalsRoute, postPrincipalsRouteHandler)
  .openapi(getPrincipalsPrincipalNameRoute, getPrincipalsPrincipalNameRouteHandler)
  .openapi(putPrincipalsPrincipalNameRoute, putPrincipalsPrincipalNameRouteHandler)
  .openapi(deletePrincipalsPrincipalNameRoute, deletePrincipalsPrincipalNameRouteHandler)
  .openapi(postPrincipalsPrincipalNameRotateRoute, postPrincipalsPrincipalNameRotateRouteHandler)
  .openapi(postPrincipalsPrincipalNameResetRoute, postPrincipalsPrincipalNameResetRouteHandler)
  .openapi(
    getPrincipalsPrincipalNamePrincipalRolesRoute,
    getPrincipalsPrincipalNamePrincipalRolesRouteHandler,
  )
  .openapi(
    putPrincipalsPrincipalNamePrincipalRolesRoute,
    putPrincipalsPrincipalNamePrincipalRolesRouteHandler,
  )
  .openapi(
    deletePrincipalsPrincipalNamePrincipalRolesPrincipalRoleNameRoute,
    deletePrincipalsPrincipalNamePrincipalRolesPrincipalRoleNameRouteHandler,
  )
  .openapi(getPrincipalRolesRoute, getPrincipalRolesRouteHandler)
  .openapi(postPrincipalRolesRoute, postPrincipalRolesRouteHandler)
  .openapi(getPrincipalRolesPrincipalRoleNameRoute, getPrincipalRolesPrincipalRoleNameRouteHandler)
  .openapi(putPrincipalRolesPrincipalRoleNameRoute, putPrincipalRolesPrincipalRoleNameRouteHandler)
  .openapi(
    deletePrincipalRolesPrincipalRoleNameRoute,
    deletePrincipalRolesPrincipalRoleNameRouteHandler,
  )
  .openapi(
    getPrincipalRolesPrincipalRoleNamePrincipalsRoute,
    getPrincipalRolesPrincipalRoleNamePrincipalsRouteHandler,
  )
  .openapi(
    getPrincipalRolesPrincipalRoleNameCatalogRolesCatalogNameRoute,
    getPrincipalRolesPrincipalRoleNameCatalogRolesCatalogNameRouteHandler,
  )
  .openapi(
    putPrincipalRolesPrincipalRoleNameCatalogRolesCatalogNameRoute,
    putPrincipalRolesPrincipalRoleNameCatalogRolesCatalogNameRouteHandler,
  )
  .openapi(
    deletePrincipalRolesPrincipalRoleNameCatalogRolesCatalogNameCatalogRoleNameRoute,
    deletePrincipalRolesPrincipalRoleNameCatalogRolesCatalogNameCatalogRoleNameRouteHandler,
  )
  .openapi(getCatalogsCatalogNameCatalogRolesRoute, getCatalogsCatalogNameCatalogRolesRouteHandler)
  .openapi(
    postCatalogsCatalogNameCatalogRolesRoute,
    postCatalogsCatalogNameCatalogRolesRouteHandler,
  )
  .openapi(
    getCatalogsCatalogNameCatalogRolesCatalogRoleNameRoute,
    getCatalogsCatalogNameCatalogRolesCatalogRoleNameRouteHandler,
  )
  .openapi(
    putCatalogsCatalogNameCatalogRolesCatalogRoleNameRoute,
    putCatalogsCatalogNameCatalogRolesCatalogRoleNameRouteHandler,
  )
  .openapi(
    deleteCatalogsCatalogNameCatalogRolesCatalogRoleNameRoute,
    deleteCatalogsCatalogNameCatalogRolesCatalogRoleNameRouteHandler,
  )
  .openapi(
    getCatalogsCatalogNameCatalogRolesCatalogRoleNamePrincipalRolesRoute,
    getCatalogsCatalogNameCatalogRolesCatalogRoleNamePrincipalRolesRouteHandler,
  )
  .openapi(
    getCatalogsCatalogNameCatalogRolesCatalogRoleNameGrantsRoute,
    getCatalogsCatalogNameCatalogRolesCatalogRoleNameGrantsRouteHandler,
  )
  .openapi(
    putCatalogsCatalogNameCatalogRolesCatalogRoleNameGrantsRoute,
    putCatalogsCatalogNameCatalogRolesCatalogRoleNameGrantsRouteHandler,
  )
  .openapi(
    postCatalogsCatalogNameCatalogRolesCatalogRoleNameGrantsRoute,
    postCatalogsCatalogNameCatalogRolesCatalogRoleNameGrantsRouteHandler,
  )

export default app
