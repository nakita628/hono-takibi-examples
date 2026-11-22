import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getMarketingEmails202609(
  args: InferRequestType<(typeof client.marketing.emails)['2026-09']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.marketing.emails['2026-09'].$get(args, options))
}

export async function postMarketingEmails202609(
  args: InferRequestType<(typeof client.marketing.emails)['2026-09']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.marketing.emails['2026-09'].$post(args, options))
}

export async function postMarketingEmails202609AbTestCreateVariation(
  args: InferRequestType<
    (typeof client.marketing.emails)['2026-09']['ab-test']['create-variation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing.emails['2026-09']['ab-test']['create-variation'].$post(args, options),
  )
}

export async function postMarketingEmails202609Clone(
  args: InferRequestType<(typeof client.marketing.emails)['2026-09']['clone']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.marketing.emails['2026-09'].clone.$post(args, options))
}

export async function getMarketingEmails202609StatisticsHistogram(
  args: InferRequestType<
    (typeof client.marketing.emails)['2026-09']['statistics']['histogram']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing.emails['2026-09'].statistics.histogram.$get(args, options),
  )
}

export async function getMarketingEmails202609StatisticsList(
  args: InferRequestType<(typeof client.marketing.emails)['2026-09']['statistics']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.marketing.emails['2026-09'].statistics.list.$get(args, options))
}

export async function getMarketingEmails202609EmailId(
  args: InferRequestType<(typeof client.marketing.emails)['2026-09'][':emailId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.marketing.emails['2026-09'][':emailId'].$get(args, options))
}

export async function deleteMarketingEmails202609EmailId(
  args: InferRequestType<(typeof client.marketing.emails)['2026-09'][':emailId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.marketing.emails['2026-09'][':emailId'].$delete(args, options))
}

export async function patchMarketingEmails202609EmailId(
  args: InferRequestType<(typeof client.marketing.emails)['2026-09'][':emailId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.marketing.emails['2026-09'][':emailId'].$patch(args, options))
}

export async function getMarketingEmails202609EmailIdAbTestGetVariation(
  args: InferRequestType<
    (typeof client.marketing.emails)['2026-09'][':emailId']['ab-test']['get-variation']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing.emails['2026-09'][':emailId']['ab-test']['get-variation'].$get(args, options),
  )
}

export async function getMarketingEmails202609EmailIdDraft(
  args: InferRequestType<(typeof client.marketing.emails)['2026-09'][':emailId']['draft']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing.emails['2026-09'][':emailId'].draft.$get(args, options),
  )
}

export async function patchMarketingEmails202609EmailIdDraft(
  args: InferRequestType<
    (typeof client.marketing.emails)['2026-09'][':emailId']['draft']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing.emails['2026-09'][':emailId'].draft.$patch(args, options),
  )
}

export async function postMarketingEmails202609EmailIdDraftReset(
  args: InferRequestType<
    (typeof client.marketing.emails)['2026-09'][':emailId']['draft']['reset']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing.emails['2026-09'][':emailId'].draft.reset.$post(args, options),
  )
}

export async function postMarketingEmails202609EmailIdPublish(
  args: InferRequestType<
    (typeof client.marketing.emails)['2026-09'][':emailId']['publish']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing.emails['2026-09'][':emailId'].publish.$post(args, options),
  )
}

export async function getMarketingEmails202609EmailIdRevisions(
  args: InferRequestType<
    (typeof client.marketing.emails)['2026-09'][':emailId']['revisions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing.emails['2026-09'][':emailId'].revisions.$get(args, options),
  )
}

export async function getMarketingEmails202609EmailIdRevisionsRevisionId(
  args: InferRequestType<
    (typeof client.marketing.emails)['2026-09'][':emailId']['revisions'][':revisionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing.emails['2026-09'][':emailId'].revisions[':revisionId'].$get(args, options),
  )
}

export async function postMarketingEmails202609EmailIdRevisionsRevisionIdRestore(
  args: InferRequestType<
    (typeof client.marketing.emails)['2026-09'][':emailId']['revisions'][':revisionId']['restore']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing.emails['2026-09'][':emailId'].revisions[':revisionId'].restore.$post(
      args,
      options,
    ),
  )
}

export async function postMarketingEmails202609EmailIdRevisionsRevisionIdRestoreToDraft(
  args: InferRequestType<
    (typeof client.marketing.emails)['2026-09'][':emailId']['revisions'][':revisionId']['restore-to-draft']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing.emails['2026-09'][':emailId'].revisions[':revisionId'][
      'restore-to-draft'
    ].$post(args, options),
  )
}

export async function postMarketingEmails202609EmailIdUnpublish(
  args: InferRequestType<
    (typeof client.marketing.emails)['2026-09'][':emailId']['unpublish']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing.emails['2026-09'][':emailId'].unpublish.$post(args, options),
  )
}
