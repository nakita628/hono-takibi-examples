import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCmsBlogSettings202609Settings(
  args: InferRequestType<(typeof client.cms)['blog-settings']['2026-09']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cms['blog-settings']['2026-09'].settings.$get(args, options))
}

export async function postCmsBlogSettings202609SettingsMultiLanguageAttachToLangGroup(
  args: InferRequestType<
    (typeof client.cms)['blog-settings']['2026-09']['settings']['multi-language']['attach-to-lang-group']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms['blog-settings']['2026-09'].settings['multi-language']['attach-to-lang-group'].$post(
      args,
      options,
    ),
  )
}

export async function postCmsBlogSettings202609SettingsMultiLanguageCreateLanguageVariation(
  args: InferRequestType<
    (typeof client.cms)['blog-settings']['2026-09']['settings']['multi-language']['create-language-variation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms['blog-settings']['2026-09'].settings['multi-language'][
      'create-language-variation'
    ].$post(args, options),
  )
}

export async function postCmsBlogSettings202609SettingsMultiLanguageDetachFromLangGroup(
  args: InferRequestType<
    (typeof client.cms)['blog-settings']['2026-09']['settings']['multi-language']['detach-from-lang-group']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms['blog-settings']['2026-09'].settings['multi-language'][
      'detach-from-lang-group'
    ].$post(args, options),
  )
}

export async function putCmsBlogSettings202609SettingsMultiLanguageSetNewLangPrimary(
  args: InferRequestType<
    (typeof client.cms)['blog-settings']['2026-09']['settings']['multi-language']['set-new-lang-primary']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms['blog-settings']['2026-09'].settings['multi-language']['set-new-lang-primary'].$put(
      args,
      options,
    ),
  )
}

export async function postCmsBlogSettings202609SettingsMultiLanguageUpdateLanguages(
  args: InferRequestType<
    (typeof client.cms)['blog-settings']['2026-09']['settings']['multi-language']['update-languages']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms['blog-settings']['2026-09'].settings['multi-language']['update-languages'].$post(
      args,
      options,
    ),
  )
}

export async function getCmsBlogSettings202609SettingsBlogId(
  args: InferRequestType<
    (typeof client.cms)['blog-settings']['2026-09']['settings'][':blogId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms['blog-settings']['2026-09'].settings[':blogId'].$get(args, options),
  )
}

export async function getCmsBlogSettings202609SettingsBlogIdRevisions(
  args: InferRequestType<
    (typeof client.cms)['blog-settings']['2026-09']['settings'][':blogId']['revisions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms['blog-settings']['2026-09'].settings[':blogId'].revisions.$get(args, options),
  )
}

export async function getCmsBlogSettings202609SettingsBlogIdRevisionsRevisionId(
  args: InferRequestType<
    (typeof client.cms)['blog-settings']['2026-09']['settings'][':blogId']['revisions'][':revisionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms['blog-settings']['2026-09'].settings[':blogId'].revisions[':revisionId'].$get(
      args,
      options,
    ),
  )
}
