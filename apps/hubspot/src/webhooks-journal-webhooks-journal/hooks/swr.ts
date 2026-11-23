import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getWebhooksJournalKey() {
  return ['webhooks-journal'] as const
}

export function getGetWebhooksJournalJournalLocal202609BatchEarliestCountKey(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch']['earliest'][':count']['$get']
  >,
) {
  return [
    'webhooks-journal',
    '/webhooks-journal/journal-local/2026-09/batch/earliest/:count',
    args,
  ] as const
}

export function useGetWebhooksJournalJournalLocal202609BatchEarliestCount<TError = unknown>(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch']['earliest'][':count']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch']['earliest'][':count']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhooksJournalJournalLocal202609BatchEarliestCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch']['earliest'][':count']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['webhooks-journal']['journal-local']['2026-09'].batch.earliest[':count'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhooksJournalJournalLocal202609BatchEarliestCount<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch']['earliest'][':count']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch']['earliest'][':count']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhooksJournalJournalLocal202609BatchEarliestCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch']['earliest'][':count']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['webhooks-journal']['journal-local']['2026-09'].batch.earliest[':count'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetWebhooksJournalJournalLocal202609BatchLatestCountKey(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch']['latest'][':count']['$get']
  >,
) {
  return [
    'webhooks-journal',
    '/webhooks-journal/journal-local/2026-09/batch/latest/:count',
    args,
  ] as const
}

export function useGetWebhooksJournalJournalLocal202609BatchLatestCount<TError = unknown>(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch']['latest'][':count']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch']['latest'][':count']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhooksJournalJournalLocal202609BatchLatestCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch']['latest'][':count']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['webhooks-journal']['journal-local']['2026-09'].batch.latest[':count'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhooksJournalJournalLocal202609BatchLatestCount<TError = unknown>(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch']['latest'][':count']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch']['latest'][':count']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhooksJournalJournalLocal202609BatchLatestCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch']['latest'][':count']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['webhooks-journal']['journal-local']['2026-09'].batch.latest[':count'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostWebhooksJournalJournalLocal202609BatchReadKey() {
  return ['webhooks-journal', '/webhooks-journal/journal-local/2026-09/batch/read', 'POST'] as const
}

export function usePostWebhooksJournalJournalLocal202609BatchRead<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch']['read']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch']['read']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebhooksJournalJournalLocal202609BatchReadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch']['read']['$post']
          >
        },
      ) =>
        parseResponse(
          client['webhooks-journal']['journal-local']['2026-09'].batch.read.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetWebhooksJournalJournalLocal202609BatchOffsetNextCountKey(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch'][':offset']['next'][':count']['$get']
  >,
) {
  return [
    'webhooks-journal',
    '/webhooks-journal/journal-local/2026-09/batch/:offset/next/:count',
    args,
  ] as const
}

export function useGetWebhooksJournalJournalLocal202609BatchOffsetNextCount<TError = unknown>(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch'][':offset']['next'][':count']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch'][':offset']['next'][':count']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhooksJournalJournalLocal202609BatchOffsetNextCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch'][':offset']['next'][':count']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['webhooks-journal']['journal-local']['2026-09'].batch[':offset'].next[
            ':count'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhooksJournalJournalLocal202609BatchOffsetNextCount<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch'][':offset']['next'][':count']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch'][':offset']['next'][':count']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhooksJournalJournalLocal202609BatchOffsetNextCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch'][':offset']['next'][':count']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['webhooks-journal']['journal-local']['2026-09'].batch[':offset'].next[
            ':count'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetWebhooksJournalJournalLocal202609EarliestKey(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal-local']['2026-09']['earliest']['$get']
  >,
) {
  return ['webhooks-journal', '/webhooks-journal/journal-local/2026-09/earliest', args] as const
}

export function useGetWebhooksJournalJournalLocal202609Earliest<TError = unknown>(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal-local']['2026-09']['earliest']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['journal-local']['2026-09']['earliest']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhooksJournalJournalLocal202609EarliestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['journal-local']['2026-09']['earliest']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['webhooks-journal']['journal-local']['2026-09'].earliest.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhooksJournalJournalLocal202609Earliest<TError = unknown>(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal-local']['2026-09']['earliest']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['journal-local']['2026-09']['earliest']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhooksJournalJournalLocal202609EarliestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['journal-local']['2026-09']['earliest']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['webhooks-journal']['journal-local']['2026-09'].earliest.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetWebhooksJournalJournalLocal202609LatestKey(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal-local']['2026-09']['latest']['$get']
  >,
) {
  return ['webhooks-journal', '/webhooks-journal/journal-local/2026-09/latest', args] as const
}

export function useGetWebhooksJournalJournalLocal202609Latest<TError = unknown>(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal-local']['2026-09']['latest']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['journal-local']['2026-09']['latest']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhooksJournalJournalLocal202609LatestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['journal-local']['2026-09']['latest']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['webhooks-journal']['journal-local']['2026-09'].latest.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhooksJournalJournalLocal202609Latest<TError = unknown>(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal-local']['2026-09']['latest']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['journal-local']['2026-09']['latest']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhooksJournalJournalLocal202609LatestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['journal-local']['2026-09']['latest']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['webhooks-journal']['journal-local']['2026-09'].latest.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetWebhooksJournalJournalLocal202609OffsetOffsetNextKey(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal-local']['2026-09']['offset'][':offset']['next']['$get']
  >,
) {
  return [
    'webhooks-journal',
    '/webhooks-journal/journal-local/2026-09/offset/:offset/next',
    args,
  ] as const
}

export function useGetWebhooksJournalJournalLocal202609OffsetOffsetNext<TError = unknown>(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal-local']['2026-09']['offset'][':offset']['next']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['journal-local']['2026-09']['offset'][':offset']['next']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhooksJournalJournalLocal202609OffsetOffsetNextKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['journal-local']['2026-09']['offset'][':offset']['next']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['webhooks-journal']['journal-local']['2026-09'].offset[':offset'].next.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhooksJournalJournalLocal202609OffsetOffsetNext<TError = unknown>(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal-local']['2026-09']['offset'][':offset']['next']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['journal-local']['2026-09']['offset'][':offset']['next']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhooksJournalJournalLocal202609OffsetOffsetNextKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['journal-local']['2026-09']['offset'][':offset']['next']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['webhooks-journal']['journal-local']['2026-09'].offset[':offset'].next.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetWebhooksJournalJournalLocal202609StatusStatusIdKey(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal-local']['2026-09']['status'][':statusId']['$get']
  >,
) {
  return [
    'webhooks-journal',
    '/webhooks-journal/journal-local/2026-09/status/:statusId',
    args,
  ] as const
}

export function useGetWebhooksJournalJournalLocal202609StatusStatusId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal-local']['2026-09']['status'][':statusId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['journal-local']['2026-09']['status'][':statusId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhooksJournalJournalLocal202609StatusStatusIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['journal-local']['2026-09']['status'][':statusId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['webhooks-journal']['journal-local']['2026-09'].status[':statusId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhooksJournalJournalLocal202609StatusStatusId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal-local']['2026-09']['status'][':statusId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['journal-local']['2026-09']['status'][':statusId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhooksJournalJournalLocal202609StatusStatusIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['journal-local']['2026-09']['status'][':statusId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['webhooks-journal']['journal-local']['2026-09'].status[':statusId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetWebhooksJournalJournal202609BatchEarliestCountKey(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal']['2026-09']['batch']['earliest'][':count']['$get']
  >,
) {
  return [
    'webhooks-journal',
    '/webhooks-journal/journal/2026-09/batch/earliest/:count',
    args,
  ] as const
}

export function useGetWebhooksJournalJournal202609BatchEarliestCount<TError = unknown>(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal']['2026-09']['batch']['earliest'][':count']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['journal']['2026-09']['batch']['earliest'][':count']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhooksJournalJournal202609BatchEarliestCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['journal']['2026-09']['batch']['earliest'][':count']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['webhooks-journal'].journal['2026-09'].batch.earliest[':count'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhooksJournalJournal202609BatchEarliestCount<TError = unknown>(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal']['2026-09']['batch']['earliest'][':count']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['journal']['2026-09']['batch']['earliest'][':count']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhooksJournalJournal202609BatchEarliestCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['journal']['2026-09']['batch']['earliest'][':count']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['webhooks-journal'].journal['2026-09'].batch.earliest[':count'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetWebhooksJournalJournal202609BatchLatestCountKey(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal']['2026-09']['batch']['latest'][':count']['$get']
  >,
) {
  return [
    'webhooks-journal',
    '/webhooks-journal/journal/2026-09/batch/latest/:count',
    args,
  ] as const
}

export function useGetWebhooksJournalJournal202609BatchLatestCount<TError = unknown>(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal']['2026-09']['batch']['latest'][':count']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['journal']['2026-09']['batch']['latest'][':count']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhooksJournalJournal202609BatchLatestCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['journal']['2026-09']['batch']['latest'][':count']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['webhooks-journal'].journal['2026-09'].batch.latest[':count'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhooksJournalJournal202609BatchLatestCount<TError = unknown>(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal']['2026-09']['batch']['latest'][':count']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['journal']['2026-09']['batch']['latest'][':count']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhooksJournalJournal202609BatchLatestCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['journal']['2026-09']['batch']['latest'][':count']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['webhooks-journal'].journal['2026-09'].batch.latest[':count'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostWebhooksJournalJournal202609BatchReadKey() {
  return ['webhooks-journal', '/webhooks-journal/journal/2026-09/batch/read', 'POST'] as const
}

export function usePostWebhooksJournalJournal202609BatchRead<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['webhooks-journal']['journal']['2026-09']['batch']['read']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['webhooks-journal']['journal']['2026-09']['batch']['read']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebhooksJournalJournal202609BatchReadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['webhooks-journal']['journal']['2026-09']['batch']['read']['$post']
          >
        },
      ) =>
        parseResponse(
          client['webhooks-journal'].journal['2026-09'].batch.read.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetWebhooksJournalJournal202609BatchOffsetNextCountKey(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal']['2026-09']['batch'][':offset']['next'][':count']['$get']
  >,
) {
  return [
    'webhooks-journal',
    '/webhooks-journal/journal/2026-09/batch/:offset/next/:count',
    args,
  ] as const
}

export function useGetWebhooksJournalJournal202609BatchOffsetNextCount<TError = unknown>(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal']['2026-09']['batch'][':offset']['next'][':count']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['journal']['2026-09']['batch'][':offset']['next'][':count']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhooksJournalJournal202609BatchOffsetNextCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['journal']['2026-09']['batch'][':offset']['next'][':count']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['webhooks-journal'].journal['2026-09'].batch[':offset'].next[':count'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhooksJournalJournal202609BatchOffsetNextCount<TError = unknown>(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal']['2026-09']['batch'][':offset']['next'][':count']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['journal']['2026-09']['batch'][':offset']['next'][':count']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhooksJournalJournal202609BatchOffsetNextCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['journal']['2026-09']['batch'][':offset']['next'][':count']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['webhooks-journal'].journal['2026-09'].batch[':offset'].next[':count'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetWebhooksJournalJournal202609EarliestKey(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal']['2026-09']['earliest']['$get']
  >,
) {
  return ['webhooks-journal', '/webhooks-journal/journal/2026-09/earliest', args] as const
}

export function useGetWebhooksJournalJournal202609Earliest<TError = unknown>(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal']['2026-09']['earliest']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['journal']['2026-09']['earliest']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhooksJournalJournal202609EarliestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['journal']['2026-09']['earliest']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['webhooks-journal'].journal['2026-09'].earliest.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhooksJournalJournal202609Earliest<TError = unknown>(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal']['2026-09']['earliest']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['journal']['2026-09']['earliest']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhooksJournalJournal202609EarliestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['journal']['2026-09']['earliest']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['webhooks-journal'].journal['2026-09'].earliest.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetWebhooksJournalJournal202609LatestKey(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal']['2026-09']['latest']['$get']
  >,
) {
  return ['webhooks-journal', '/webhooks-journal/journal/2026-09/latest', args] as const
}

export function useGetWebhooksJournalJournal202609Latest<TError = unknown>(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal']['2026-09']['latest']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['journal']['2026-09']['latest']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhooksJournalJournal202609LatestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['journal']['2026-09']['latest']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['webhooks-journal'].journal['2026-09'].latest.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhooksJournalJournal202609Latest<TError = unknown>(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal']['2026-09']['latest']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['journal']['2026-09']['latest']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhooksJournalJournal202609LatestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['journal']['2026-09']['latest']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['webhooks-journal'].journal['2026-09'].latest.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetWebhooksJournalJournal202609OffsetOffsetNextKey(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal']['2026-09']['offset'][':offset']['next']['$get']
  >,
) {
  return [
    'webhooks-journal',
    '/webhooks-journal/journal/2026-09/offset/:offset/next',
    args,
  ] as const
}

export function useGetWebhooksJournalJournal202609OffsetOffsetNext<TError = unknown>(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal']['2026-09']['offset'][':offset']['next']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['journal']['2026-09']['offset'][':offset']['next']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhooksJournalJournal202609OffsetOffsetNextKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['journal']['2026-09']['offset'][':offset']['next']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['webhooks-journal'].journal['2026-09'].offset[':offset'].next.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhooksJournalJournal202609OffsetOffsetNext<TError = unknown>(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal']['2026-09']['offset'][':offset']['next']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['journal']['2026-09']['offset'][':offset']['next']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhooksJournalJournal202609OffsetOffsetNextKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['journal']['2026-09']['offset'][':offset']['next']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['webhooks-journal'].journal['2026-09'].offset[':offset'].next.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetWebhooksJournalJournal202609StatusStatusIdKey(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal']['2026-09']['status'][':statusId']['$get']
  >,
) {
  return ['webhooks-journal', '/webhooks-journal/journal/2026-09/status/:statusId', args] as const
}

export function useGetWebhooksJournalJournal202609StatusStatusId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal']['2026-09']['status'][':statusId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['journal']['2026-09']['status'][':statusId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhooksJournalJournal202609StatusStatusIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['journal']['2026-09']['status'][':statusId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['webhooks-journal'].journal['2026-09'].status[':statusId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhooksJournalJournal202609StatusStatusId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal']['2026-09']['status'][':statusId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['journal']['2026-09']['status'][':statusId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhooksJournalJournal202609StatusStatusIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['journal']['2026-09']['status'][':statusId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['webhooks-journal'].journal['2026-09'].status[':statusId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostWebhooksJournalSnapshots202609CrmKey() {
  return ['webhooks-journal', '/webhooks-journal/snapshots/2026-09/crm', 'POST'] as const
}

export function usePostWebhooksJournalSnapshots202609Crm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['webhooks-journal']['snapshots']['2026-09']['crm']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['webhooks-journal']['snapshots']['2026-09']['crm']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebhooksJournalSnapshots202609CrmKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['webhooks-journal']['snapshots']['2026-09']['crm']['$post']
          >
        },
      ) =>
        parseResponse(
          client['webhooks-journal'].snapshots['2026-09'].crm.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetWebhooksJournalSubscriptions202609Key() {
  return ['webhooks-journal', '/webhooks-journal/subscriptions/2026-09'] as const
}

export function useGetWebhooksJournalSubscriptions202609<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['webhooks-journal']['subscriptions']['2026-09']['$get']>
          >
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhooksJournalSubscriptions202609Key()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['webhooks-journal']['subscriptions']['2026-09']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['webhooks-journal'].subscriptions['2026-09'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhooksJournalSubscriptions202609<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['webhooks-journal']['subscriptions']['2026-09']['$get']>
          >
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhooksJournalSubscriptions202609Key()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['webhooks-journal']['subscriptions']['2026-09']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['webhooks-journal'].subscriptions['2026-09'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostWebhooksJournalSubscriptions202609Key() {
  return ['webhooks-journal', '/webhooks-journal/subscriptions/2026-09', 'POST'] as const
}

export function usePostWebhooksJournalSubscriptions202609<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['webhooks-journal']['subscriptions']['2026-09']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['webhooks-journal']['subscriptions']['2026-09']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebhooksJournalSubscriptions202609Key()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['webhooks-journal']['subscriptions']['2026-09']['$post']
          >
        },
      ) =>
        parseResponse(
          client['webhooks-journal'].subscriptions['2026-09'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostWebhooksJournalSubscriptions202609FiltersKey() {
  return ['webhooks-journal', '/webhooks-journal/subscriptions/2026-09/filters', 'POST'] as const
}

export function usePostWebhooksJournalSubscriptions202609Filters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['webhooks-journal']['subscriptions']['2026-09']['filters']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['webhooks-journal']['subscriptions']['2026-09']['filters']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebhooksJournalSubscriptions202609FiltersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['webhooks-journal']['subscriptions']['2026-09']['filters']['$post']
          >
        },
      ) =>
        parseResponse(
          client['webhooks-journal'].subscriptions['2026-09'].filters.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetWebhooksJournalSubscriptions202609FiltersSubscriptionSubscriptionIdKey(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['subscriptions']['2026-09']['filters']['subscription'][':subscriptionId']['$get']
  >,
) {
  return [
    'webhooks-journal',
    '/webhooks-journal/subscriptions/2026-09/filters/subscription/:subscriptionId',
    args,
  ] as const
}

export function useGetWebhooksJournalSubscriptions202609FiltersSubscriptionSubscriptionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['subscriptions']['2026-09']['filters']['subscription'][':subscriptionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['subscriptions']['2026-09']['filters']['subscription'][':subscriptionId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhooksJournalSubscriptions202609FiltersSubscriptionSubscriptionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['subscriptions']['2026-09']['filters']['subscription'][':subscriptionId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['webhooks-journal'].subscriptions['2026-09'].filters.subscription[
            ':subscriptionId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhooksJournalSubscriptions202609FiltersSubscriptionSubscriptionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['subscriptions']['2026-09']['filters']['subscription'][':subscriptionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['subscriptions']['2026-09']['filters']['subscription'][':subscriptionId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhooksJournalSubscriptions202609FiltersSubscriptionSubscriptionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['subscriptions']['2026-09']['filters']['subscription'][':subscriptionId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['webhooks-journal'].subscriptions['2026-09'].filters.subscription[
            ':subscriptionId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetWebhooksJournalSubscriptions202609FiltersFilterIdKey(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['subscriptions']['2026-09']['filters'][':filterId']['$get']
  >,
) {
  return [
    'webhooks-journal',
    '/webhooks-journal/subscriptions/2026-09/filters/:filterId',
    args,
  ] as const
}

export function useGetWebhooksJournalSubscriptions202609FiltersFilterId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['subscriptions']['2026-09']['filters'][':filterId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['subscriptions']['2026-09']['filters'][':filterId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhooksJournalSubscriptions202609FiltersFilterIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['subscriptions']['2026-09']['filters'][':filterId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['webhooks-journal'].subscriptions['2026-09'].filters[':filterId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhooksJournalSubscriptions202609FiltersFilterId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['subscriptions']['2026-09']['filters'][':filterId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['subscriptions']['2026-09']['filters'][':filterId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhooksJournalSubscriptions202609FiltersFilterIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['subscriptions']['2026-09']['filters'][':filterId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['webhooks-journal'].subscriptions['2026-09'].filters[':filterId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteWebhooksJournalSubscriptions202609FiltersFilterIdKey() {
  return [
    'webhooks-journal',
    '/webhooks-journal/subscriptions/2026-09/filters/:filterId',
    'DELETE',
  ] as const
}

export function useDeleteWebhooksJournalSubscriptions202609FiltersFilterId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['subscriptions']['2026-09']['filters'][':filterId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)['webhooks-journal']['subscriptions']['2026-09']['filters'][':filterId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWebhooksJournalSubscriptions202609FiltersFilterIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['webhooks-journal']['subscriptions']['2026-09']['filters'][':filterId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['webhooks-journal'].subscriptions['2026-09'].filters[':filterId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteWebhooksJournalSubscriptions202609PortalsPortalIdKey() {
  return [
    'webhooks-journal',
    '/webhooks-journal/subscriptions/2026-09/portals/:portalId',
    'DELETE',
  ] as const
}

export function useDeleteWebhooksJournalSubscriptions202609PortalsPortalId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['subscriptions']['2026-09']['portals'][':portalId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)['webhooks-journal']['subscriptions']['2026-09']['portals'][':portalId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWebhooksJournalSubscriptions202609PortalsPortalIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['webhooks-journal']['subscriptions']['2026-09']['portals'][':portalId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['webhooks-journal'].subscriptions['2026-09'].portals[':portalId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetWebhooksJournalSubscriptions202609SubscriptionIdKey(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['subscriptions']['2026-09'][':subscriptionId']['$get']
  >,
) {
  return [
    'webhooks-journal',
    '/webhooks-journal/subscriptions/2026-09/:subscriptionId',
    args,
  ] as const
}

export function useGetWebhooksJournalSubscriptions202609SubscriptionId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['subscriptions']['2026-09'][':subscriptionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['subscriptions']['2026-09'][':subscriptionId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhooksJournalSubscriptions202609SubscriptionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['subscriptions']['2026-09'][':subscriptionId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['webhooks-journal'].subscriptions['2026-09'][':subscriptionId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhooksJournalSubscriptions202609SubscriptionId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['subscriptions']['2026-09'][':subscriptionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['subscriptions']['2026-09'][':subscriptionId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhooksJournalSubscriptions202609SubscriptionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['subscriptions']['2026-09'][':subscriptionId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['webhooks-journal'].subscriptions['2026-09'][':subscriptionId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteWebhooksJournalSubscriptions202609SubscriptionIdKey() {
  return [
    'webhooks-journal',
    '/webhooks-journal/subscriptions/2026-09/:subscriptionId',
    'DELETE',
  ] as const
}

export function useDeleteWebhooksJournalSubscriptions202609SubscriptionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['subscriptions']['2026-09'][':subscriptionId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)['webhooks-journal']['subscriptions']['2026-09'][':subscriptionId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWebhooksJournalSubscriptions202609SubscriptionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['webhooks-journal']['subscriptions']['2026-09'][':subscriptionId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['webhooks-journal'].subscriptions['2026-09'][':subscriptionId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
