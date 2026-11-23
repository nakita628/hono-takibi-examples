import { injectQuery, queryOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getApiV1BusinessItemIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.BusinessItem)[':id']['$get']>,
) {
  return ['api', '/api/v1/BusinessItem/:id', args] as const
}

export function getApiV1BusinessItemIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.BusinessItem)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.BusinessItem)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.BusinessItem)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BusinessItemIdQueryKey>
  >({
    queryKey: getApiV1BusinessItemIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.BusinessItem[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1BusinessItemId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.BusinessItem)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.BusinessItem)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.BusinessItem)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1BusinessItemIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1BusinessItemIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiV1LayingBodyQueryKey() {
  return ['api', '/api/v1/LayingBody'] as const
}

export function getApiV1LayingBodyQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.LayingBody.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.LayingBody.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LayingBodyQueryKey>
  >({
    queryKey: getApiV1LayingBodyQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.LayingBody.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1LayingBody<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.LayingBody.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.LayingBody.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LayingBodyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1LayingBodyQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getApiV1ProcedureQueryKey() {
  return ['api', '/api/v1/Procedure'] as const
}

export function getApiV1ProcedureQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Procedure.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Procedure.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ProcedureQueryKey>
  >({
    queryKey: getApiV1ProcedureQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.Procedure.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiV1Procedure<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Procedure.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Procedure.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ProcedureQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1ProcedureQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getApiV1ProcedureIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.Procedure)[':id']['$get']>,
) {
  return ['api', '/api/v1/Procedure/:id', args] as const
}

export function getApiV1ProcedureIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.Procedure)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.Procedure)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.Procedure)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ProcedureIdQueryKey>
  >({
    queryKey: getApiV1ProcedureIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.Procedure[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1ProcedureId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.Procedure)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.Procedure)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.Procedure)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ProcedureIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1ProcedureIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiV1ProposedNegativeStatutoryInstrumentQueryKey(
  args: InferRequestType<typeof client.api.v1.ProposedNegativeStatutoryInstrument.$get>,
) {
  return ['api', '/api/v1/ProposedNegativeStatutoryInstrument', args] as const
}

export function getApiV1ProposedNegativeStatutoryInstrumentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.ProposedNegativeStatutoryInstrument.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.ProposedNegativeStatutoryInstrument.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.ProposedNegativeStatutoryInstrument.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ProposedNegativeStatutoryInstrumentQueryKey>
  >({
    queryKey: getApiV1ProposedNegativeStatutoryInstrumentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.ProposedNegativeStatutoryInstrument.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1ProposedNegativeStatutoryInstrument<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.ProposedNegativeStatutoryInstrument.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.ProposedNegativeStatutoryInstrument.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.ProposedNegativeStatutoryInstrument.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ProposedNegativeStatutoryInstrumentQueryKey>
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
      ...getApiV1ProposedNegativeStatutoryInstrumentQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1ProposedNegativeStatutoryInstrumentIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.ProposedNegativeStatutoryInstrument)[':id']['$get']>,
) {
  return ['api', '/api/v1/ProposedNegativeStatutoryInstrument/:id', args] as const
}

export function getApiV1ProposedNegativeStatutoryInstrumentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.ProposedNegativeStatutoryInstrument)[':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.ProposedNegativeStatutoryInstrument)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.ProposedNegativeStatutoryInstrument)[':id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ProposedNegativeStatutoryInstrumentIdQueryKey>
  >({
    queryKey: getApiV1ProposedNegativeStatutoryInstrumentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.ProposedNegativeStatutoryInstrument[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1ProposedNegativeStatutoryInstrumentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.ProposedNegativeStatutoryInstrument)[':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.ProposedNegativeStatutoryInstrument)[':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.ProposedNegativeStatutoryInstrument)[':id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ProposedNegativeStatutoryInstrumentIdQueryKey>
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
      ...getApiV1ProposedNegativeStatutoryInstrumentIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1ProposedNegativeStatutoryInstrumentIdBusinessItemsQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.ProposedNegativeStatutoryInstrument)[':id']['BusinessItems']['$get']
  >,
) {
  return ['api', '/api/v1/ProposedNegativeStatutoryInstrument/:id/BusinessItems', args] as const
}

export function getApiV1ProposedNegativeStatutoryInstrumentIdBusinessItemsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.ProposedNegativeStatutoryInstrument)[':id']['BusinessItems']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.ProposedNegativeStatutoryInstrument)[':id']['BusinessItems']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.ProposedNegativeStatutoryInstrument)[':id']['BusinessItems']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ProposedNegativeStatutoryInstrumentIdBusinessItemsQueryKey>
  >({
    queryKey: getApiV1ProposedNegativeStatutoryInstrumentIdBusinessItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.ProposedNegativeStatutoryInstrument[':id'].BusinessItems.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1ProposedNegativeStatutoryInstrumentIdBusinessItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.ProposedNegativeStatutoryInstrument)[':id']['BusinessItems']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.ProposedNegativeStatutoryInstrument)[':id']['BusinessItems']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.ProposedNegativeStatutoryInstrument)[':id']['BusinessItems']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ProposedNegativeStatutoryInstrumentIdBusinessItemsQueryKey>
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
      ...getApiV1ProposedNegativeStatutoryInstrumentIdBusinessItemsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1StatutoryInstrumentQueryKey(
  args: InferRequestType<typeof client.api.v1.StatutoryInstrument.$get>,
) {
  return ['api', '/api/v1/StatutoryInstrument', args] as const
}

export function getApiV1StatutoryInstrumentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.StatutoryInstrument.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.StatutoryInstrument.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.StatutoryInstrument.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1StatutoryInstrumentQueryKey>
  >({
    queryKey: getApiV1StatutoryInstrumentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.StatutoryInstrument.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1StatutoryInstrument<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.StatutoryInstrument.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.StatutoryInstrument.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.StatutoryInstrument.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1StatutoryInstrumentQueryKey>
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
      ...getApiV1StatutoryInstrumentQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1StatutoryInstrumentIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.StatutoryInstrument)[':id']['$get']>,
) {
  return ['api', '/api/v1/StatutoryInstrument/:id', args] as const
}

export function getApiV1StatutoryInstrumentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.StatutoryInstrument)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.StatutoryInstrument)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.StatutoryInstrument)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1StatutoryInstrumentIdQueryKey>
  >({
    queryKey: getApiV1StatutoryInstrumentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.StatutoryInstrument[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1StatutoryInstrumentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.StatutoryInstrument)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.StatutoryInstrument)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.StatutoryInstrument)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1StatutoryInstrumentIdQueryKey>
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
      ...getApiV1StatutoryInstrumentIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1StatutoryInstrumentIdBusinessItemsQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.StatutoryInstrument)[':id']['BusinessItems']['$get']
  >,
) {
  return ['api', '/api/v1/StatutoryInstrument/:id/BusinessItems', args] as const
}

export function getApiV1StatutoryInstrumentIdBusinessItemsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.StatutoryInstrument)[':id']['BusinessItems']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.StatutoryInstrument)[':id']['BusinessItems']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.StatutoryInstrument)[':id']['BusinessItems']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1StatutoryInstrumentIdBusinessItemsQueryKey>
  >({
    queryKey: getApiV1StatutoryInstrumentIdBusinessItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.StatutoryInstrument[':id'].BusinessItems.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1StatutoryInstrumentIdBusinessItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.StatutoryInstrument)[':id']['BusinessItems']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.StatutoryInstrument)[':id']['BusinessItems']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.StatutoryInstrument)[':id']['BusinessItems']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1StatutoryInstrumentIdBusinessItemsQueryKey>
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
      ...getApiV1StatutoryInstrumentIdBusinessItemsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}
