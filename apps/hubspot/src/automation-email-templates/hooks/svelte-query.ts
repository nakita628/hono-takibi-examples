import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAutomationKey() {
  return ['automation'] as const
}

export function getAutomationEmailTemplates202609QueryKey(
  args: InferRequestType<(typeof client.automation)['email-templates']['2026-09']['$get']>,
) {
  return ['automation', '/automation/email-templates/2026-09', args] as const
}

export function getAutomationEmailTemplates202609QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.automation)['email-templates']['2026-09']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.automation)['email-templates']['2026-09']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.automation)['email-templates']['2026-09']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAutomationEmailTemplates202609QueryKey>
  >({
    queryKey: getAutomationEmailTemplates202609QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.automation['email-templates']['2026-09'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAutomationEmailTemplates202609<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.automation)['email-templates']['2026-09']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.automation)['email-templates']['2026-09']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.automation)['email-templates']['2026-09']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAutomationEmailTemplates202609QueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAutomationEmailTemplates202609QueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostAutomationEmailTemplates202609MutationKey() {
  return ['automation', '/automation/email-templates/2026-09', 'POST'] as const
}

export function getPostAutomationEmailTemplates202609MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.automation)['email-templates']['2026-09']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.automation)['email-templates']['2026-09']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAutomationEmailTemplates202609MutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.automation)['email-templates']['2026-09']['$post']>,
    ) {
      return parseResponse(client.automation['email-templates']['2026-09'].$post(args, options))
    },
  })
}

export function createPostAutomationEmailTemplates202609<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.automation)['email-templates']['2026-09']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.automation)['email-templates']['2026-09']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAutomationEmailTemplates202609MutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAutomationEmailTemplates202609FoldersQueryKey(
  args: InferRequestType<
    (typeof client.automation)['email-templates']['2026-09']['folders']['$get']
  >,
) {
  return ['automation', '/automation/email-templates/2026-09/folders', args] as const
}

export function getAutomationEmailTemplates202609FoldersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.automation)['email-templates']['2026-09']['folders']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.automation)['email-templates']['2026-09']['folders']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.automation)['email-templates']['2026-09']['folders']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAutomationEmailTemplates202609FoldersQueryKey>
  >({
    queryKey: getAutomationEmailTemplates202609FoldersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.automation['email-templates']['2026-09'].folders.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAutomationEmailTemplates202609Folders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.automation)['email-templates']['2026-09']['folders']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.automation)['email-templates']['2026-09']['folders']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.automation)['email-templates']['2026-09']['folders']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAutomationEmailTemplates202609FoldersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAutomationEmailTemplates202609FoldersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAutomationEmailTemplates202609TemplateIdQueryKey(
  args: InferRequestType<
    (typeof client.automation)['email-templates']['2026-09'][':templateId']['$get']
  >,
) {
  return ['automation', '/automation/email-templates/2026-09/:templateId', args] as const
}

export function getAutomationEmailTemplates202609TemplateIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.automation)['email-templates']['2026-09'][':templateId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.automation)['email-templates']['2026-09'][':templateId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.automation)['email-templates']['2026-09'][':templateId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAutomationEmailTemplates202609TemplateIdQueryKey>
  >({
    queryKey: getAutomationEmailTemplates202609TemplateIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.automation['email-templates']['2026-09'][':templateId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAutomationEmailTemplates202609TemplateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.automation)['email-templates']['2026-09'][':templateId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.automation)['email-templates']['2026-09'][':templateId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.automation)['email-templates']['2026-09'][':templateId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAutomationEmailTemplates202609TemplateIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAutomationEmailTemplates202609TemplateIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPatchAutomationEmailTemplates202609TemplateIdMutationKey() {
  return ['automation', '/automation/email-templates/2026-09/:templateId', 'PATCH'] as const
}

export function getPatchAutomationEmailTemplates202609TemplateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.automation)['email-templates']['2026-09'][':templateId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.automation)['email-templates']['2026-09'][':templateId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchAutomationEmailTemplates202609TemplateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.automation)['email-templates']['2026-09'][':templateId']['$patch']
      >,
    ) {
      return parseResponse(
        client.automation['email-templates']['2026-09'][':templateId'].$patch(args, options),
      )
    },
  })
}

export function createPatchAutomationEmailTemplates202609TemplateId<
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
                  (typeof client.automation)['email-templates']['2026-09'][':templateId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.automation)['email-templates']['2026-09'][':templateId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAutomationEmailTemplates202609TemplateIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
