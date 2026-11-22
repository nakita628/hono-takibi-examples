import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCrmKey() {
  return ['crm'] as const
}

export function getPostCrmExtensionsCalling202609InboundCallMutationKey() {
  return ['crm', '/crm/extensions/calling/2026-09/inbound-call', 'POST'] as const
}

export function getPostCrmExtensionsCalling202609InboundCallMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.crm.extensions.calling)['2026-09']['inbound-call']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.crm.extensions.calling)['2026-09']['inbound-call']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCrmExtensionsCalling202609InboundCallMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.extensions.calling)['2026-09']['inbound-call']['$post']
      >,
    ) {
      return parseResponse(
        client.crm.extensions.calling['2026-09']['inbound-call'].$post(args, options),
      )
    },
  })
}

export function injectPostCrmExtensionsCalling202609InboundCall<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.extensions.calling)['2026-09']['inbound-call']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.crm.extensions.calling)['2026-09']['inbound-call']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCrmExtensionsCalling202609InboundCallMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostCrmExtensionsCalling202609TranscriptsMutationKey() {
  return ['crm', '/crm/extensions/calling/2026-09/transcripts', 'POST'] as const
}

export function getPostCrmExtensionsCalling202609TranscriptsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.crm.extensions.calling)['2026-09']['transcripts']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.crm.extensions.calling)['2026-09']['transcripts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCrmExtensionsCalling202609TranscriptsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.extensions.calling)['2026-09']['transcripts']['$post']
      >,
    ) {
      return parseResponse(
        client.crm.extensions.calling['2026-09'].transcripts.$post(args, options),
      )
    },
  })
}

export function injectPostCrmExtensionsCalling202609Transcripts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.extensions.calling)['2026-09']['transcripts']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.crm.extensions.calling)['2026-09']['transcripts']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCrmExtensionsCalling202609TranscriptsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCrmExtensionsCalling202609TranscriptsTranscriptIdQueryKey(
  args: InferRequestType<
    (typeof client.crm.extensions.calling)['2026-09']['transcripts'][':transcriptId']['$get']
  >,
) {
  return ['crm', '/crm/extensions/calling/2026-09/transcripts/:transcriptId', args] as const
}

export function getCrmExtensionsCalling202609TranscriptsTranscriptIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.crm.extensions.calling)['2026-09']['transcripts'][':transcriptId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.crm.extensions.calling)['2026-09']['transcripts'][':transcriptId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.extensions.calling)['2026-09']['transcripts'][':transcriptId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmExtensionsCalling202609TranscriptsTranscriptIdQueryKey>
  >({
    queryKey: getCrmExtensionsCalling202609TranscriptsTranscriptIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.extensions.calling['2026-09'].transcripts[':transcriptId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCrmExtensionsCalling202609TranscriptsTranscriptId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.crm.extensions.calling)['2026-09']['transcripts'][':transcriptId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.crm.extensions.calling)['2026-09']['transcripts'][':transcriptId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.extensions.calling)['2026-09']['transcripts'][':transcriptId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmExtensionsCalling202609TranscriptsTranscriptIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCrmExtensionsCalling202609TranscriptsTranscriptIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteCrmExtensionsCalling202609TranscriptsTranscriptIdMutationKey() {
  return ['crm', '/crm/extensions/calling/2026-09/transcripts/:transcriptId', 'DELETE'] as const
}

export function getDeleteCrmExtensionsCalling202609TranscriptsTranscriptIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.extensions.calling)['2026-09']['transcripts'][':transcriptId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.crm.extensions.calling)['2026-09']['transcripts'][':transcriptId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteCrmExtensionsCalling202609TranscriptsTranscriptIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.extensions.calling)['2026-09']['transcripts'][':transcriptId']['$delete']
      >,
    ) {
      return parseResponse(
        client.crm.extensions.calling['2026-09'].transcripts[':transcriptId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteCrmExtensionsCalling202609TranscriptsTranscriptId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.crm.extensions.calling)['2026-09']['transcripts'][':transcriptId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.crm.extensions.calling)['2026-09']['transcripts'][':transcriptId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteCrmExtensionsCalling202609TranscriptsTranscriptIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
