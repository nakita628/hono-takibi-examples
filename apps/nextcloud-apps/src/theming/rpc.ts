import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getIndexPhpAppsThemingThemeThemeIdCss(
  args: InferRequestType<
    (typeof client)['index.php']['apps']['theming']['theme'][':themeId.css']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['index.php'].apps.theming.theme[':themeId.css'].$get(args, options),
  )
}

export async function getIndexPhpAppsThemingImageKey(
  args: InferRequestType<(typeof client)['index.php']['apps']['theming']['image'][':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['index.php'].apps.theming.image[':key'].$get(args, options))
}

export async function getIndexPhpAppsThemingManifestApp(
  args: InferRequestType<
    (typeof client)['index.php']['apps']['theming']['manifest'][':app']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['index.php'].apps.theming.manifest[':app'].$get(args, options))
}

export async function getIndexPhpAppsThemingFaviconApp(
  args: InferRequestType<
    (typeof client)['index.php']['apps']['theming']['favicon'][':app']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['index.php'].apps.theming.favicon[':app'].$get(args, options))
}

export async function getIndexPhpAppsThemingIconApp(
  args: InferRequestType<(typeof client)['index.php']['apps']['theming']['icon'][':app']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['index.php'].apps.theming.icon[':app'].$get(args, options))
}

export async function getIndexPhpAppsThemingImgAppImage(
  args: InferRequestType<
    (typeof client)['index.php']['apps']['theming']['img'][':app'][':image']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['index.php'].apps.theming.img[':app'][':image'].$get(args, options),
  )
}

export async function getIndexPhpAppsThemingBackground(
  args: InferRequestType<(typeof client)['index.php']['apps']['theming']['background']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['index.php'].apps.theming.background.$get(args, options))
}

export async function postIndexPhpAppsThemingBackgroundType(
  args: InferRequestType<
    (typeof client)['index.php']['apps']['theming']['background'][':type']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['index.php'].apps.theming.background[':type'].$post(args, options),
  )
}

export async function deleteIndexPhpAppsThemingBackgroundCustom(
  args: InferRequestType<
    (typeof client)['index.php']['apps']['theming']['background']['custom']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['index.php'].apps.theming.background.custom.$delete(args, options),
  )
}

export async function putOcsV2PhpAppsThemingApiV1ThemeThemeIdEnable(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['theming']['api']['v1']['theme'][':themeId']['enable']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.theming.api.v1.theme[':themeId'].enable.$put(args, options),
  )
}

export async function deleteOcsV2PhpAppsThemingApiV1ThemeThemeId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['theming']['api']['v1']['theme'][':themeId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.theming.api.v1.theme[':themeId'].$delete(args, options),
  )
}
