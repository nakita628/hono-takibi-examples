import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCmsPages202609LandingPages(
  args: InferRequestType<(typeof client.cms.pages)['2026-09']['landing-pages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cms.pages['2026-09']['landing-pages'].$get(args, options))
}

export async function postCmsPages202609LandingPages(
  args: InferRequestType<(typeof client.cms.pages)['2026-09']['landing-pages']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cms.pages['2026-09']['landing-pages'].$post(args, options))
}

export async function postCmsPages202609LandingPagesAbTestCreateVariation(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['landing-pages']['ab-test']['create-variation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.pages['2026-09']['landing-pages']['ab-test']['create-variation'].$post(
      args,
      options,
    ),
  )
}

export async function postCmsPages202609LandingPagesAbTestEnd(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['landing-pages']['ab-test']['end']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.pages['2026-09']['landing-pages']['ab-test'].end.$post(args, options),
  )
}

export async function postCmsPages202609LandingPagesAbTestRerun(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['landing-pages']['ab-test']['rerun']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.pages['2026-09']['landing-pages']['ab-test'].rerun.$post(args, options),
  )
}

export async function postCmsPages202609LandingPagesBatchArchive(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['landing-pages']['batch']['archive']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.pages['2026-09']['landing-pages'].batch.archive.$post(args, options),
  )
}

export async function postCmsPages202609LandingPagesBatchCreate(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['landing-pages']['batch']['create']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.pages['2026-09']['landing-pages'].batch.create.$post(args, options),
  )
}

export async function postCmsPages202609LandingPagesBatchRead(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['landing-pages']['batch']['read']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.pages['2026-09']['landing-pages'].batch.read.$post(args, options),
  )
}

export async function postCmsPages202609LandingPagesBatchUpdate(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['landing-pages']['batch']['update']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.pages['2026-09']['landing-pages'].batch.update.$post(args, options),
  )
}

export async function postCmsPages202609LandingPagesClone(
  args: InferRequestType<(typeof client.cms.pages)['2026-09']['landing-pages']['clone']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.pages['2026-09']['landing-pages'].clone.$post(args, options),
  )
}

export async function getCmsPages202609LandingPagesFolders(
  args: InferRequestType<(typeof client.cms.pages)['2026-09']['landing-pages']['folders']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.pages['2026-09']['landing-pages'].folders.$get(args, options),
  )
}

export async function postCmsPages202609LandingPagesFolders(
  args: InferRequestType<(typeof client.cms.pages)['2026-09']['landing-pages']['folders']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.pages['2026-09']['landing-pages'].folders.$post(args, options),
  )
}

export async function postCmsPages202609LandingPagesFoldersBatchArchive(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['landing-pages']['folders']['batch']['archive']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.pages['2026-09']['landing-pages'].folders.batch.archive.$post(args, options),
  )
}

export async function postCmsPages202609LandingPagesFoldersBatchCreate(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['landing-pages']['folders']['batch']['create']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.pages['2026-09']['landing-pages'].folders.batch.create.$post(args, options),
  )
}

export async function postCmsPages202609LandingPagesFoldersBatchRead(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['landing-pages']['folders']['batch']['read']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.pages['2026-09']['landing-pages'].folders.batch.read.$post(args, options),
  )
}

export async function postCmsPages202609LandingPagesFoldersBatchUpdate(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['landing-pages']['folders']['batch']['update']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.pages['2026-09']['landing-pages'].folders.batch.update.$post(args, options),
  )
}

export async function getCmsPages202609LandingPagesFoldersObjectId(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['landing-pages']['folders'][':objectId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.pages['2026-09']['landing-pages'].folders[':objectId'].$get(args, options),
  )
}

export async function deleteCmsPages202609LandingPagesFoldersObjectId(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['landing-pages']['folders'][':objectId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.pages['2026-09']['landing-pages'].folders[':objectId'].$delete(args, options),
  )
}

export async function patchCmsPages202609LandingPagesFoldersObjectId(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['landing-pages']['folders'][':objectId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.pages['2026-09']['landing-pages'].folders[':objectId'].$patch(args, options),
  )
}

export async function getCmsPages202609LandingPagesFoldersObjectIdRevisions(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['landing-pages']['folders'][':objectId']['revisions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.pages['2026-09']['landing-pages'].folders[':objectId'].revisions.$get(args, options),
  )
}

export async function getCmsPages202609LandingPagesFoldersObjectIdRevisionsRevisionId(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['landing-pages']['folders'][':objectId']['revisions'][':revisionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.pages['2026-09']['landing-pages'].folders[':objectId'].revisions[':revisionId'].$get(
      args,
      options,
    ),
  )
}

export async function postCmsPages202609LandingPagesFoldersObjectIdRevisionsRevisionIdRestore(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['landing-pages']['folders'][':objectId']['revisions'][':revisionId']['restore']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.pages['2026-09']['landing-pages'].folders[':objectId'].revisions[
      ':revisionId'
    ].restore.$post(args, options),
  )
}

export async function postCmsPages202609LandingPagesMultiLanguageAttachToLangGroup(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['landing-pages']['multi-language']['attach-to-lang-group']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.pages['2026-09']['landing-pages']['multi-language']['attach-to-lang-group'].$post(
      args,
      options,
    ),
  )
}

export async function postCmsPages202609LandingPagesMultiLanguageCreateLanguageVariation(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['landing-pages']['multi-language']['create-language-variation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.pages['2026-09']['landing-pages']['multi-language'][
      'create-language-variation'
    ].$post(args, options),
  )
}

export async function postCmsPages202609LandingPagesMultiLanguageDetachFromLangGroup(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['landing-pages']['multi-language']['detach-from-lang-group']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.pages['2026-09']['landing-pages']['multi-language']['detach-from-lang-group'].$post(
      args,
      options,
    ),
  )
}

export async function putCmsPages202609LandingPagesMultiLanguageSetNewLangPrimary(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['landing-pages']['multi-language']['set-new-lang-primary']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.pages['2026-09']['landing-pages']['multi-language']['set-new-lang-primary'].$put(
      args,
      options,
    ),
  )
}

export async function postCmsPages202609LandingPagesMultiLanguageUpdateLanguages(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['landing-pages']['multi-language']['update-languages']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.pages['2026-09']['landing-pages']['multi-language']['update-languages'].$post(
      args,
      options,
    ),
  )
}

export async function postCmsPages202609LandingPagesSchedule(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['landing-pages']['schedule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.pages['2026-09']['landing-pages'].schedule.$post(args, options),
  )
}

export async function getCmsPages202609LandingPagesObjectId(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.pages['2026-09']['landing-pages'][':objectId'].$get(args, options),
  )
}

export async function deleteCmsPages202609LandingPagesObjectId(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.pages['2026-09']['landing-pages'][':objectId'].$delete(args, options),
  )
}

export async function patchCmsPages202609LandingPagesObjectId(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.pages['2026-09']['landing-pages'][':objectId'].$patch(args, options),
  )
}

export async function getCmsPages202609LandingPagesObjectIdDraft(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['draft']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.pages['2026-09']['landing-pages'][':objectId'].draft.$get(args, options),
  )
}

export async function patchCmsPages202609LandingPagesObjectIdDraft(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['draft']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.pages['2026-09']['landing-pages'][':objectId'].draft.$patch(args, options),
  )
}

export async function postCmsPages202609LandingPagesObjectIdDraftPushLive(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['draft']['push-live']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.pages['2026-09']['landing-pages'][':objectId'].draft['push-live'].$post(
      args,
      options,
    ),
  )
}

export async function postCmsPages202609LandingPagesObjectIdDraftReset(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['draft']['reset']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.pages['2026-09']['landing-pages'][':objectId'].draft.reset.$post(args, options),
  )
}

export async function getCmsPages202609LandingPagesObjectIdRevisions(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['revisions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.pages['2026-09']['landing-pages'][':objectId'].revisions.$get(args, options),
  )
}

export async function getCmsPages202609LandingPagesObjectIdRevisionsRevisionId(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['revisions'][':revisionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.pages['2026-09']['landing-pages'][':objectId'].revisions[':revisionId'].$get(
      args,
      options,
    ),
  )
}

export async function postCmsPages202609LandingPagesObjectIdRevisionsRevisionIdRestore(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['revisions'][':revisionId']['restore']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.pages['2026-09']['landing-pages'][':objectId'].revisions[
      ':revisionId'
    ].restore.$post(args, options),
  )
}

export async function postCmsPages202609LandingPagesObjectIdRevisionsRevisionIdRestoreToDraft(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['revisions'][':revisionId']['restore-to-draft']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.pages['2026-09']['landing-pages'][':objectId'].revisions[':revisionId'][
      'restore-to-draft'
    ].$post(args, options),
  )
}

export async function getCmsPages202609SitePages(
  args: InferRequestType<(typeof client.cms.pages)['2026-09']['site-pages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cms.pages['2026-09']['site-pages'].$get(args, options))
}

export async function postCmsPages202609SitePages(
  args: InferRequestType<(typeof client.cms.pages)['2026-09']['site-pages']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cms.pages['2026-09']['site-pages'].$post(args, options))
}

export async function postCmsPages202609SitePagesAbTestCreateVariation(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['site-pages']['ab-test']['create-variation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.pages['2026-09']['site-pages']['ab-test']['create-variation'].$post(args, options),
  )
}

export async function postCmsPages202609SitePagesAbTestEnd(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['site-pages']['ab-test']['end']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.pages['2026-09']['site-pages']['ab-test'].end.$post(args, options),
  )
}

export async function postCmsPages202609SitePagesAbTestRerun(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['site-pages']['ab-test']['rerun']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.pages['2026-09']['site-pages']['ab-test'].rerun.$post(args, options),
  )
}

export async function postCmsPages202609SitePagesBatchArchive(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['site-pages']['batch']['archive']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.pages['2026-09']['site-pages'].batch.archive.$post(args, options),
  )
}

export async function postCmsPages202609SitePagesBatchCreate(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['site-pages']['batch']['create']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.pages['2026-09']['site-pages'].batch.create.$post(args, options),
  )
}

export async function postCmsPages202609SitePagesBatchRead(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['site-pages']['batch']['read']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.pages['2026-09']['site-pages'].batch.read.$post(args, options),
  )
}

export async function postCmsPages202609SitePagesBatchUpdate(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['site-pages']['batch']['update']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.pages['2026-09']['site-pages'].batch.update.$post(args, options),
  )
}

export async function postCmsPages202609SitePagesClone(
  args: InferRequestType<(typeof client.cms.pages)['2026-09']['site-pages']['clone']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cms.pages['2026-09']['site-pages'].clone.$post(args, options))
}

export async function postCmsPages202609SitePagesMultiLanguageAttachToLangGroup(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['site-pages']['multi-language']['attach-to-lang-group']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.pages['2026-09']['site-pages']['multi-language']['attach-to-lang-group'].$post(
      args,
      options,
    ),
  )
}

export async function postCmsPages202609SitePagesMultiLanguageCreateLanguageVariation(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['site-pages']['multi-language']['create-language-variation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.pages['2026-09']['site-pages']['multi-language']['create-language-variation'].$post(
      args,
      options,
    ),
  )
}

export async function postCmsPages202609SitePagesMultiLanguageDetachFromLangGroup(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['site-pages']['multi-language']['detach-from-lang-group']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.pages['2026-09']['site-pages']['multi-language']['detach-from-lang-group'].$post(
      args,
      options,
    ),
  )
}

export async function putCmsPages202609SitePagesMultiLanguageSetNewLangPrimary(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['site-pages']['multi-language']['set-new-lang-primary']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.pages['2026-09']['site-pages']['multi-language']['set-new-lang-primary'].$put(
      args,
      options,
    ),
  )
}

export async function postCmsPages202609SitePagesMultiLanguageUpdateLanguages(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['site-pages']['multi-language']['update-languages']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.pages['2026-09']['site-pages']['multi-language']['update-languages'].$post(
      args,
      options,
    ),
  )
}

export async function postCmsPages202609SitePagesSchedule(
  args: InferRequestType<(typeof client.cms.pages)['2026-09']['site-pages']['schedule']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.pages['2026-09']['site-pages'].schedule.$post(args, options),
  )
}

export async function getCmsPages202609SitePagesObjectId(
  args: InferRequestType<(typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.pages['2026-09']['site-pages'][':objectId'].$get(args, options),
  )
}

export async function deleteCmsPages202609SitePagesObjectId(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.pages['2026-09']['site-pages'][':objectId'].$delete(args, options),
  )
}

export async function patchCmsPages202609SitePagesObjectId(
  args: InferRequestType<(typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.pages['2026-09']['site-pages'][':objectId'].$patch(args, options),
  )
}

export async function getCmsPages202609SitePagesObjectIdDraft(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['draft']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.pages['2026-09']['site-pages'][':objectId'].draft.$get(args, options),
  )
}

export async function patchCmsPages202609SitePagesObjectIdDraft(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['draft']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.pages['2026-09']['site-pages'][':objectId'].draft.$patch(args, options),
  )
}

export async function postCmsPages202609SitePagesObjectIdDraftPushLive(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['draft']['push-live']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.pages['2026-09']['site-pages'][':objectId'].draft['push-live'].$post(args, options),
  )
}

export async function postCmsPages202609SitePagesObjectIdDraftReset(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['draft']['reset']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.pages['2026-09']['site-pages'][':objectId'].draft.reset.$post(args, options),
  )
}

export async function getCmsPages202609SitePagesObjectIdRevisions(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['revisions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.pages['2026-09']['site-pages'][':objectId'].revisions.$get(args, options),
  )
}

export async function getCmsPages202609SitePagesObjectIdRevisionsRevisionId(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['revisions'][':revisionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.pages['2026-09']['site-pages'][':objectId'].revisions[':revisionId'].$get(
      args,
      options,
    ),
  )
}

export async function postCmsPages202609SitePagesObjectIdRevisionsRevisionIdRestore(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['revisions'][':revisionId']['restore']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.pages['2026-09']['site-pages'][':objectId'].revisions[':revisionId'].restore.$post(
      args,
      options,
    ),
  )
}

export async function postCmsPages202609SitePagesObjectIdRevisionsRevisionIdRestoreToDraft(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['revisions'][':revisionId']['restore-to-draft']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.pages['2026-09']['site-pages'][':objectId'].revisions[':revisionId'][
      'restore-to-draft'
    ].$post(args, options),
  )
}
