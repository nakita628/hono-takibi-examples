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

export function getCqactionsHtmlKey() {
  return ['.cqactions.html'] as const
}

export function getAppsKey() {
  return ['apps'] as const
}

export function getBinKey() {
  return ['bin'] as const
}

export function getCrxKey() {
  return ['crx'] as const
}

export function getEtcKey() {
  return ['etc'] as const
}

export function getLibsKey() {
  return ['libs'] as const
}

export function getSystemKey() {
  return ['system'] as const
}

export function getIntermediatePathKey() {
  return ['{intermediatePath}'] as const
}

export function getPathKey() {
  return ['{path}'] as const
}

export function getPostCqactionsHtmlMutationKey() {
  return ['.cqactions.html', '/.cqactions.html', 'POST'] as const
}

export function getPostCqactionsHtmlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['.cqactions.html']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['.cqactions.html']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCqactionsHtmlMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['.cqactions.html']['$post']>) {
      return parseResponse(client['.cqactions.html'].$post(args, options))
    },
  })
}

export function injectPostCqactionsHtml<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['.cqactions.html']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['.cqactions.html']['$post']>,
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
    const mutationDefaults = getPostCqactionsHtmlMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAppsSystemConfigComAdobeGraniteAuthSamlSamlAuthenticationHandlerConfigMutationKey() {
  return [
    'apps',
    '/apps/system/config/com.adobe.granite.auth.saml.SamlAuthenticationHandler.config',
    'POST',
  ] as const
}

export function getPostAppsSystemConfigComAdobeGraniteAuthSamlSamlAuthenticationHandlerConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps.system.config)['com.adobe.granite.auth.saml.SamlAuthenticationHandler.config']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apps.system.config)['com.adobe.granite.auth.saml.SamlAuthenticationHandler.config']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostAppsSystemConfigComAdobeGraniteAuthSamlSamlAuthenticationHandlerConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps.system.config)['com.adobe.granite.auth.saml.SamlAuthenticationHandler.config']['$post']
      >,
    ) {
      return parseResponse(
        client.apps.system.config[
          'com.adobe.granite.auth.saml.SamlAuthenticationHandler.config'
        ].$post(args, options),
      )
    },
  })
}

export function injectPostAppsSystemConfigComAdobeGraniteAuthSamlSamlAuthenticationHandlerConfig<
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
                  (typeof client.apps.system.config)['com.adobe.granite.auth.saml.SamlAuthenticationHandler.config']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apps.system.config)['com.adobe.granite.auth.saml.SamlAuthenticationHandler.config']['$post']
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
      getPostAppsSystemConfigComAdobeGraniteAuthSamlSamlAuthenticationHandlerConfigMutationOptions<
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

export function getPostAppsSystemConfigComShinesolutionsAemPasswordresetActivatorMutationKey() {
  return [
    'apps',
    '/apps/system/config/com.shinesolutions.aem.passwordreset.Activator',
    'POST',
  ] as const
}

export function getPostAppsSystemConfigComShinesolutionsAemPasswordresetActivatorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps.system.config)['com.shinesolutions.aem.passwordreset.Activator']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apps.system.config)['com.shinesolutions.aem.passwordreset.Activator']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAppsSystemConfigComShinesolutionsAemPasswordresetActivatorMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps.system.config)['com.shinesolutions.aem.passwordreset.Activator']['$post']
      >,
    ) {
      return parseResponse(
        client.apps.system.config['com.shinesolutions.aem.passwordreset.Activator'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostAppsSystemConfigComShinesolutionsAemPasswordresetActivator<
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
                  (typeof client.apps.system.config)['com.shinesolutions.aem.passwordreset.Activator']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apps.system.config)['com.shinesolutions.aem.passwordreset.Activator']['$post']
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
      getPostAppsSystemConfigComShinesolutionsAemPasswordresetActivatorMutationOptions<
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

export function getPostAppsSystemConfigComShinesolutionsHealthcheckHcImplActiveBundleHealthCheckMutationKey() {
  return [
    'apps',
    '/apps/system/config/com.shinesolutions.healthcheck.hc.impl.ActiveBundleHealthCheck',
    'POST',
  ] as const
}

export function getPostAppsSystemConfigComShinesolutionsHealthcheckHcImplActiveBundleHealthCheckMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps.system.config)['com.shinesolutions.healthcheck.hc.impl.ActiveBundleHealthCheck']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apps.system.config)['com.shinesolutions.healthcheck.hc.impl.ActiveBundleHealthCheck']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostAppsSystemConfigComShinesolutionsHealthcheckHcImplActiveBundleHealthCheckMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps.system.config)['com.shinesolutions.healthcheck.hc.impl.ActiveBundleHealthCheck']['$post']
      >,
    ) {
      return parseResponse(
        client.apps.system.config[
          'com.shinesolutions.healthcheck.hc.impl.ActiveBundleHealthCheck'
        ].$post(args, options),
      )
    },
  })
}

export function injectPostAppsSystemConfigComShinesolutionsHealthcheckHcImplActiveBundleHealthCheck<
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
                  (typeof client.apps.system.config)['com.shinesolutions.healthcheck.hc.impl.ActiveBundleHealthCheck']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apps.system.config)['com.shinesolutions.healthcheck.hc.impl.ActiveBundleHealthCheck']['$post']
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
      getPostAppsSystemConfigComShinesolutionsHealthcheckHcImplActiveBundleHealthCheckMutationOptions<
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

export function getPostAppsSystemConfigOrgApacheFelixHttpMutationKey() {
  return ['apps', '/apps/system/config/org.apache.felix.http', 'POST'] as const
}

export function getPostAppsSystemConfigOrgApacheFelixHttpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps.system.config)['org.apache.felix.http']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps.system.config)['org.apache.felix.http']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsSystemConfigOrgApacheFelixHttpMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps.system.config)['org.apache.felix.http']['$post']>,
    ) {
      return parseResponse(client.apps.system.config['org.apache.felix.http'].$post(args, options))
    },
  })
}

export function injectPostAppsSystemConfigOrgApacheFelixHttp<
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
                ReturnType<(typeof client.apps.system.config)['org.apache.felix.http']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps.system.config)['org.apache.felix.http']['$post']>,
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
    const mutationDefaults = getPostAppsSystemConfigOrgApacheFelixHttpMutationOptions<
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

export function getPostAppsSystemConfigOrgApacheHttpProxyconfiguratorConfigMutationKey() {
  return ['apps', '/apps/system/config/org.apache.http.proxyconfigurator.config', 'POST'] as const
}

export function getPostAppsSystemConfigOrgApacheHttpProxyconfiguratorConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps.system.config)['org.apache.http.proxyconfigurator.config']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apps.system.config)['org.apache.http.proxyconfigurator.config']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAppsSystemConfigOrgApacheHttpProxyconfiguratorConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps.system.config)['org.apache.http.proxyconfigurator.config']['$post']
      >,
    ) {
      return parseResponse(
        client.apps.system.config['org.apache.http.proxyconfigurator.config'].$post(args, options),
      )
    },
  })
}

export function injectPostAppsSystemConfigOrgApacheHttpProxyconfiguratorConfig<
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
                  (typeof client.apps.system.config)['org.apache.http.proxyconfigurator.config']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apps.system.config)['org.apache.http.proxyconfigurator.config']['$post']
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
      getPostAppsSystemConfigOrgApacheHttpProxyconfiguratorConfigMutationOptions<
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

export function getPostAppsSystemConfigOrgApacheSlingJcrDavexImplServletsSlingDavExServletMutationKey() {
  return [
    'apps',
    '/apps/system/config/org.apache.sling.jcr.davex.impl.servlets.SlingDavExServlet',
    'POST',
  ] as const
}

export function getPostAppsSystemConfigOrgApacheSlingJcrDavexImplServletsSlingDavExServletMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps.system.config)['org.apache.sling.jcr.davex.impl.servlets.SlingDavExServlet']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apps.system.config)['org.apache.sling.jcr.davex.impl.servlets.SlingDavExServlet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostAppsSystemConfigOrgApacheSlingJcrDavexImplServletsSlingDavExServletMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps.system.config)['org.apache.sling.jcr.davex.impl.servlets.SlingDavExServlet']['$post']
      >,
    ) {
      return parseResponse(
        client.apps.system.config[
          'org.apache.sling.jcr.davex.impl.servlets.SlingDavExServlet'
        ].$post(args, options),
      )
    },
  })
}

export function injectPostAppsSystemConfigOrgApacheSlingJcrDavexImplServletsSlingDavExServlet<
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
                  (typeof client.apps.system.config)['org.apache.sling.jcr.davex.impl.servlets.SlingDavExServlet']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apps.system.config)['org.apache.sling.jcr.davex.impl.servlets.SlingDavExServlet']['$post']
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
      getPostAppsSystemConfigOrgApacheSlingJcrDavexImplServletsSlingDavExServletMutationOptions<
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

export function getPostAppsSystemConfigOrgApacheSlingSecurityImplReferrerFilterMutationKey() {
  return [
    'apps',
    '/apps/system/config/org.apache.sling.security.impl.ReferrerFilter',
    'POST',
  ] as const
}

export function getPostAppsSystemConfigOrgApacheSlingSecurityImplReferrerFilterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps.system.config)['org.apache.sling.security.impl.ReferrerFilter']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apps.system.config)['org.apache.sling.security.impl.ReferrerFilter']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAppsSystemConfigOrgApacheSlingSecurityImplReferrerFilterMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps.system.config)['org.apache.sling.security.impl.ReferrerFilter']['$post']
      >,
    ) {
      return parseResponse(
        client.apps.system.config['org.apache.sling.security.impl.ReferrerFilter'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostAppsSystemConfigOrgApacheSlingSecurityImplReferrerFilter<
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
                  (typeof client.apps.system.config)['org.apache.sling.security.impl.ReferrerFilter']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apps.system.config)['org.apache.sling.security.impl.ReferrerFilter']['$post']
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
      getPostAppsSystemConfigOrgApacheSlingSecurityImplReferrerFilterMutationOptions<
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

export function getPostAppsSystemConfigOrgApacheSlingServletsGetDefaultGetServletMutationKey() {
  return [
    'apps',
    '/apps/system/config/org.apache.sling.servlets.get.DefaultGetServlet',
    'POST',
  ] as const
}

export function getPostAppsSystemConfigOrgApacheSlingServletsGetDefaultGetServletMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps.system.config)['org.apache.sling.servlets.get.DefaultGetServlet']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apps.system.config)['org.apache.sling.servlets.get.DefaultGetServlet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAppsSystemConfigOrgApacheSlingServletsGetDefaultGetServletMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps.system.config)['org.apache.sling.servlets.get.DefaultGetServlet']['$post']
      >,
    ) {
      return parseResponse(
        client.apps.system.config['org.apache.sling.servlets.get.DefaultGetServlet'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostAppsSystemConfigOrgApacheSlingServletsGetDefaultGetServlet<
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
                  (typeof client.apps.system.config)['org.apache.sling.servlets.get.DefaultGetServlet']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apps.system.config)['org.apache.sling.servlets.get.DefaultGetServlet']['$post']
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
      getPostAppsSystemConfigOrgApacheSlingServletsGetDefaultGetServletMutationOptions<
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

export function getPostAppsSystemConfigConfigNodeNameMutationKey() {
  return ['apps', '/apps/system/config/:configNodeName', 'POST'] as const
}

export function getPostAppsSystemConfigConfigNodeNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps.system.config)[':configNodeName']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps.system.config)[':configNodeName']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsSystemConfigConfigNodeNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps.system.config)[':configNodeName']['$post']>,
    ) {
      return parseResponse(client.apps.system.config[':configNodeName'].$post(args, options))
    },
  })
}

export function injectPostAppsSystemConfigConfigNodeName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps.system.config)[':configNodeName']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps.system.config)[':configNodeName']['$post']>,
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
    const mutationDefaults = getPostAppsSystemConfigConfigNodeNameMutationOptions<
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

export function getBinQuerybuilderJsonQueryKey(
  args: InferRequestType<(typeof client.bin)['querybuilder.json']['$get']>,
) {
  return ['bin', '/bin/querybuilder.json', args] as const
}

export function getBinQuerybuilderJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.bin)['querybuilder.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bin)['querybuilder.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.bin)['querybuilder.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBinQuerybuilderJsonQueryKey>
  >({
    queryKey: getBinQuerybuilderJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bin['querybuilder.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBinQuerybuilderJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.bin)['querybuilder.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bin)['querybuilder.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.bin)['querybuilder.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBinQuerybuilderJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBinQuerybuilderJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostBinQuerybuilderJsonMutationKey() {
  return ['bin', '/bin/querybuilder.json', 'POST'] as const
}

export function getPostBinQuerybuilderJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.bin)['querybuilder.json']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.bin)['querybuilder.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBinQuerybuilderJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.bin)['querybuilder.json']['$post']>) {
      return parseResponse(client.bin['querybuilder.json'].$post(args, options))
    },
  })
}

export function injectPostBinQuerybuilderJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.bin)['querybuilder.json']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.bin)['querybuilder.json']['$post']>,
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
    const mutationDefaults = getPostBinQuerybuilderJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostCrxExplorerUiSetpasswordJspMutationKey() {
  return ['crx', '/crx/explorer/ui/setpassword.jsp', 'POST'] as const
}

export function getPostCrxExplorerUiSetpasswordJspMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.crx.explorer.ui)['setpassword.jsp']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.crx.explorer.ui)['setpassword.jsp']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCrxExplorerUiSetpasswordJspMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.crx.explorer.ui)['setpassword.jsp']['$post']>,
    ) {
      return parseResponse(client.crx.explorer.ui['setpassword.jsp'].$post(args, options))
    },
  })
}

export function injectPostCrxExplorerUiSetpasswordJsp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.crx.explorer.ui)['setpassword.jsp']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.crx.explorer.ui)['setpassword.jsp']['$post']>,
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
    const mutationDefaults = getPostCrxExplorerUiSetpasswordJspMutationOptions<
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

export function getCrxPackmgrInstallstatusJspQueryKey() {
  return ['crx', '/crx/packmgr/installstatus.jsp'] as const
}

export function getCrxPackmgrInstallstatusJspQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crx.packmgr)['installstatus.jsp']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.crx.packmgr)['installstatus.jsp']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrxPackmgrInstallstatusJspQueryKey>
  >({
    queryKey: getCrxPackmgrInstallstatusJspQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.crx.packmgr['installstatus.jsp'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCrxPackmgrInstallstatusJsp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crx.packmgr)['installstatus.jsp']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.crx.packmgr)['installstatus.jsp']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrxPackmgrInstallstatusJspQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCrxPackmgrInstallstatusJspQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostCrxPackmgrServiceJspMutationKey() {
  return ['crx', '/crx/packmgr/service.jsp', 'POST'] as const
}

export function getPostCrxPackmgrServiceJspMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.crx.packmgr)['service.jsp']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.crx.packmgr)['service.jsp']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCrxPackmgrServiceJspMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.crx.packmgr)['service.jsp']['$post']>) {
      return parseResponse(client.crx.packmgr['service.jsp'].$post(args, options))
    },
  })
}

export function injectPostCrxPackmgrServiceJsp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.crx.packmgr)['service.jsp']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.crx.packmgr)['service.jsp']['$post']>,
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
    const mutationDefaults = getPostCrxPackmgrServiceJspMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostCrxPackmgrServiceJsonPathMutationKey() {
  return ['crx', '/crx/packmgr/service/.json/:path', 'POST'] as const
}

export function getPostCrxPackmgrServiceJsonPathMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.crx.packmgr.service)['.json'][':path']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.crx.packmgr.service)['.json'][':path']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCrxPackmgrServiceJsonPathMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.crx.packmgr.service)['.json'][':path']['$post']>,
    ) {
      return parseResponse(client.crx.packmgr.service['.json'][':path'].$post(args, options))
    },
  })
}

export function injectPostCrxPackmgrServiceJsonPath<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.crx.packmgr.service)['.json'][':path']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.crx.packmgr.service)['.json'][':path']['$post']>,
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
    const mutationDefaults = getPostCrxPackmgrServiceJsonPathMutationOptions<
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

export function getCrxPackmgrServiceScriptHtmlQueryKey() {
  return ['crx', '/crx/packmgr/service/script.html'] as const
}

export function getCrxPackmgrServiceScriptHtmlQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crx.packmgr.service)['script.html']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.crx.packmgr.service)['script.html']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrxPackmgrServiceScriptHtmlQueryKey>
  >({
    queryKey: getCrxPackmgrServiceScriptHtmlQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.crx.packmgr.service['script.html'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCrxPackmgrServiceScriptHtml<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crx.packmgr.service)['script.html']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.crx.packmgr.service)['script.html']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrxPackmgrServiceScriptHtmlQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCrxPackmgrServiceScriptHtmlQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostCrxPackmgrUpdateJspMutationKey() {
  return ['crx', '/crx/packmgr/update.jsp', 'POST'] as const
}

export function getPostCrxPackmgrUpdateJspMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.crx.packmgr)['update.jsp']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.crx.packmgr)['update.jsp']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCrxPackmgrUpdateJspMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.crx.packmgr)['update.jsp']['$post']>) {
      return parseResponse(client.crx.packmgr['update.jsp'].$post(args, options))
    },
  })
}

export function injectPostCrxPackmgrUpdateJsp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.crx.packmgr)['update.jsp']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.crx.packmgr)['update.jsp']['$post']>,
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
    const mutationDefaults = getPostCrxPackmgrUpdateJspMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCrxServerCrxDefaultJcrRoot1JsonQueryKey() {
  return ['crx', '/crx/server/crx.default/jcr:root/.1.json'] as const
}

export function getCrxServerCrxDefaultJcrRoot1JsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.crx.server)['crx.default']['jcr:root']['.1.json']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.crx.server)['crx.default']['jcr:root']['.1.json']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrxServerCrxDefaultJcrRoot1JsonQueryKey>
  >({
    queryKey: getCrxServerCrxDefaultJcrRoot1JsonQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.crx.server['crx.default']['jcr:root']['.1.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCrxServerCrxDefaultJcrRoot1Json<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.crx.server)['crx.default']['jcr:root']['.1.json']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.crx.server)['crx.default']['jcr:root']['.1.json']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrxServerCrxDefaultJcrRoot1JsonQueryKey>
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
      ...getCrxServerCrxDefaultJcrRoot1JsonQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getEtcPackagesGroupNameVersionZipQueryKey(
  args: InferRequestType<(typeof client.etc.packages)[':group'][':name-{version}.zip']['$get']>,
) {
  return ['etc', '/etc/packages/:group/:name-{version}.zip', args] as const
}

export function getEtcPackagesGroupNameVersionZipQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.etc.packages)[':group'][':name-{version}.zip']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.etc.packages)[':group'][':name-{version}.zip']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.etc.packages)[':group'][':name-{version}.zip']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEtcPackagesGroupNameVersionZipQueryKey>
  >({
    queryKey: getEtcPackagesGroupNameVersionZipQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.etc.packages[':group'][':name-{version}.zip'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEtcPackagesGroupNameVersionZip<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.etc.packages)[':group'][':name-{version}.zip']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.etc.packages)[':group'][':name-{version}.zip']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.etc.packages)[':group'][':name-{version}.zip']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEtcPackagesGroupNameVersionZipQueryKey>
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
      ...getEtcPackagesGroupNameVersionZipQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getEtcPackagesGroupNameVersionZipJcrContentVltDefinitionFilterTidy2JsonQueryKey(
  args: InferRequestType<
    (typeof client.etc.packages)[':group'][':name-{version}.zip']['jcr:content']['vlt:definition']['filter.tidy.2.json']['$get']
  >,
) {
  return [
    'etc',
    '/etc/packages/:group/:name-{version}.zip/jcr:content/vlt:definition/filter.tidy.2.json',
    args,
  ] as const
}

export function getEtcPackagesGroupNameVersionZipJcrContentVltDefinitionFilterTidy2JsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.etc.packages)[':group'][':name-{version}.zip']['jcr:content']['vlt:definition']['filter.tidy.2.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.etc.packages)[':group'][':name-{version}.zip']['jcr:content']['vlt:definition']['filter.tidy.2.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.etc.packages)[':group'][':name-{version}.zip']['jcr:content']['vlt:definition']['filter.tidy.2.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getEtcPackagesGroupNameVersionZipJcrContentVltDefinitionFilterTidy2JsonQueryKey
    >
  >({
    queryKey: getEtcPackagesGroupNameVersionZipJcrContentVltDefinitionFilterTidy2JsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.etc.packages[':group'][':name-{version}.zip']['jcr:content']['vlt:definition'][
          'filter.tidy.2.json'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEtcPackagesGroupNameVersionZipJcrContentVltDefinitionFilterTidy2Json<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.etc.packages)[':group'][':name-{version}.zip']['jcr:content']['vlt:definition']['filter.tidy.2.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.etc.packages)[':group'][':name-{version}.zip']['jcr:content']['vlt:definition']['filter.tidy.2.json']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.etc.packages)[':group'][':name-{version}.zip']['jcr:content']['vlt:definition']['filter.tidy.2.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getEtcPackagesGroupNameVersionZipJcrContentVltDefinitionFilterTidy2JsonQueryKey
        >
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
      ...getEtcPackagesGroupNameVersionZipJcrContentVltDefinitionFilterTidy2JsonQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getEtcReplicationAgentsRunmode1JsonQueryKey(
  args: InferRequestType<(typeof client.etc.replication)['agents.{runmode}.-1.json']['$get']>,
) {
  return ['etc', '/etc/replication/agents.{runmode}.-1.json', args] as const
}

export function getEtcReplicationAgentsRunmode1JsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.etc.replication)['agents.{runmode}.-1.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.etc.replication)['agents.{runmode}.-1.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.etc.replication)['agents.{runmode}.-1.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEtcReplicationAgentsRunmode1JsonQueryKey>
  >({
    queryKey: getEtcReplicationAgentsRunmode1JsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.etc.replication['agents.{runmode}.-1.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEtcReplicationAgentsRunmode1Json<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.etc.replication)['agents.{runmode}.-1.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.etc.replication)['agents.{runmode}.-1.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.etc.replication)['agents.{runmode}.-1.json']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEtcReplicationAgentsRunmode1JsonQueryKey>
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
      ...getEtcReplicationAgentsRunmode1JsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getEtcReplicationAgentsRunmodeNameQueryKey(
  args: InferRequestType<(typeof client.etc.replication)['agents.{runmode}'][':name']['$get']>,
) {
  return ['etc', '/etc/replication/agents.{runmode}/:name', args] as const
}

export function getEtcReplicationAgentsRunmodeNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.etc.replication)['agents.{runmode}'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.etc.replication)['agents.{runmode}'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.etc.replication)['agents.{runmode}'][':name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEtcReplicationAgentsRunmodeNameQueryKey>
  >({
    queryKey: getEtcReplicationAgentsRunmodeNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.etc.replication['agents.{runmode}'][':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEtcReplicationAgentsRunmodeName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.etc.replication)['agents.{runmode}'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.etc.replication)['agents.{runmode}'][':name']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.etc.replication)['agents.{runmode}'][':name']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEtcReplicationAgentsRunmodeNameQueryKey>
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
      ...getEtcReplicationAgentsRunmodeNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostEtcReplicationAgentsRunmodeNameMutationKey() {
  return ['etc', '/etc/replication/agents.{runmode}/:name', 'POST'] as const
}

export function getPostEtcReplicationAgentsRunmodeNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.etc.replication)['agents.{runmode}'][':name']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.etc.replication)['agents.{runmode}'][':name']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEtcReplicationAgentsRunmodeNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.etc.replication)['agents.{runmode}'][':name']['$post']>,
    ) {
      return parseResponse(client.etc.replication['agents.{runmode}'][':name'].$post(args, options))
    },
  })
}

export function injectPostEtcReplicationAgentsRunmodeName<
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
                ReturnType<(typeof client.etc.replication)['agents.{runmode}'][':name']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.etc.replication)['agents.{runmode}'][':name']['$post']>,
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
    const mutationDefaults = getPostEtcReplicationAgentsRunmodeNameMutationOptions<
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

export function getDeleteEtcReplicationAgentsRunmodeNameMutationKey() {
  return ['etc', '/etc/replication/agents.{runmode}/:name', 'DELETE'] as const
}

export function getDeleteEtcReplicationAgentsRunmodeNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.etc.replication)['agents.{runmode}'][':name']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.etc.replication)['agents.{runmode}'][':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteEtcReplicationAgentsRunmodeNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.etc.replication)['agents.{runmode}'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.etc.replication['agents.{runmode}'][':name'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteEtcReplicationAgentsRunmodeName<
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
                ReturnType<(typeof client.etc.replication)['agents.{runmode}'][':name']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.etc.replication)['agents.{runmode}'][':name']['$delete']>,
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
    const mutationDefaults = getDeleteEtcReplicationAgentsRunmodeNameMutationOptions<
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

export function getPostEtcTruststoreMutationKey() {
  return ['etc', '/etc/truststore', 'POST'] as const
}

export function getPostEtcTruststoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etc.truststore.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.etc.truststore.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEtcTruststoreMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.etc.truststore.$post>) {
      return parseResponse(client.etc.truststore.$post(args, options))
    },
  })
}

export function injectPostEtcTruststore<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etc.truststore.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.etc.truststore.$post>,
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
    const mutationDefaults = getPostEtcTruststoreMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEtcTruststoreTruststoreP12QueryKey() {
  return ['etc', '/etc/truststore/truststore.p12'] as const
}

export function getEtcTruststoreTruststoreP12QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.etc.truststore)['truststore.p12']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.etc.truststore)['truststore.p12']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEtcTruststoreTruststoreP12QueryKey>
  >({
    queryKey: getEtcTruststoreTruststoreP12QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.etc.truststore['truststore.p12'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEtcTruststoreTruststoreP12<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.etc.truststore)['truststore.p12']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.etc.truststore)['truststore.p12']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEtcTruststoreTruststoreP12QueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEtcTruststoreTruststoreP12QueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getLibsGraniteCoreContentLoginHtmlQueryKey() {
  return ['libs', '/libs/granite/core/content/login.html'] as const
}

export function getLibsGraniteCoreContentLoginHtmlQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.libs.granite.core.content)['login.html']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.libs.granite.core.content)['login.html']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLibsGraniteCoreContentLoginHtmlQueryKey>
  >({
    queryKey: getLibsGraniteCoreContentLoginHtmlQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.libs.granite.core.content['login.html'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectLibsGraniteCoreContentLoginHtml<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.libs.granite.core.content)['login.html']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.libs.granite.core.content)['login.html']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLibsGraniteCoreContentLoginHtmlQueryKey>
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
      ...getLibsGraniteCoreContentLoginHtmlQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostLibsGraniteSecurityPostAuthorizablesMutationKey() {
  return ['libs', '/libs/granite/security/post/authorizables', 'POST'] as const
}

export function getPostLibsGraniteSecurityPostAuthorizablesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.libs.granite.security.post.authorizables.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.libs.granite.security.post.authorizables.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLibsGraniteSecurityPostAuthorizablesMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.libs.granite.security.post.authorizables.$post>,
    ) {
      return parseResponse(client.libs.granite.security.post.authorizables.$post(args, options))
    },
  })
}

export function injectPostLibsGraniteSecurityPostAuthorizables<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.libs.granite.security.post.authorizables.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.libs.granite.security.post.authorizables.$post>,
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
    const mutationDefaults = getPostLibsGraniteSecurityPostAuthorizablesMutationOptions<
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

export function getPostLibsGraniteSecurityPostSslSetupHtmlMutationKey() {
  return ['libs', '/libs/granite/security/post/sslSetup.html', 'POST'] as const
}

export function getPostLibsGraniteSecurityPostSslSetupHtmlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.libs.granite.security.post)['sslSetup.html']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.libs.granite.security.post)['sslSetup.html']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLibsGraniteSecurityPostSslSetupHtmlMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.libs.granite.security.post)['sslSetup.html']['$post']>,
    ) {
      return parseResponse(client.libs.granite.security.post['sslSetup.html'].$post(args, options))
    },
  })
}

export function injectPostLibsGraniteSecurityPostSslSetupHtml<
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
                ReturnType<(typeof client.libs.granite.security.post)['sslSetup.html']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.libs.granite.security.post)['sslSetup.html']['$post']>,
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
    const mutationDefaults = getPostLibsGraniteSecurityPostSslSetupHtmlMutationOptions<
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

export function getPostLibsGraniteSecurityPostTruststoreMutationKey() {
  return ['libs', '/libs/granite/security/post/truststore', 'POST'] as const
}

export function getPostLibsGraniteSecurityPostTruststoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.libs.granite.security.post.truststore.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.libs.granite.security.post.truststore.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLibsGraniteSecurityPostTruststoreMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.libs.granite.security.post.truststore.$post>,
    ) {
      return parseResponse(client.libs.granite.security.post.truststore.$post(args, options))
    },
  })
}

export function injectPostLibsGraniteSecurityPostTruststore<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.libs.granite.security.post.truststore.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.libs.granite.security.post.truststore.$post>,
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
    const mutationDefaults = getPostLibsGraniteSecurityPostTruststoreMutationOptions<
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

export function getLibsGraniteSecurityTruststoreJsonQueryKey() {
  return ['libs', '/libs/granite/security/truststore.json'] as const
}

export function getLibsGraniteSecurityTruststoreJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.libs.granite.security)['truststore.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.libs.granite.security)['truststore.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLibsGraniteSecurityTruststoreJsonQueryKey>
  >({
    queryKey: getLibsGraniteSecurityTruststoreJsonQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.libs.granite.security['truststore.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectLibsGraniteSecurityTruststoreJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.libs.granite.security)['truststore.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.libs.granite.security)['truststore.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLibsGraniteSecurityTruststoreJsonQueryKey>
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
      ...getLibsGraniteSecurityTruststoreJsonQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostLibsReplicationTreeactivationHtmlMutationKey() {
  return ['libs', '/libs/replication/treeactivation.html', 'POST'] as const
}

export function getPostLibsReplicationTreeactivationHtmlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.libs.replication)['treeactivation.html']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.libs.replication)['treeactivation.html']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLibsReplicationTreeactivationHtmlMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.libs.replication)['treeactivation.html']['$post']>,
    ) {
      return parseResponse(client.libs.replication['treeactivation.html'].$post(args, options))
    },
  })
}

export function injectPostLibsReplicationTreeactivationHtml<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.libs.replication)['treeactivation.html']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.libs.replication)['treeactivation.html']['$post']>,
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
    const mutationDefaults = getPostLibsReplicationTreeactivationHtmlMutationOptions<
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

export function getPostSystemConsoleBundlesNameMutationKey() {
  return ['system', '/system/console/bundles/:name', 'POST'] as const
}

export function getPostSystemConsoleBundlesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.system.console.bundles)[':name']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.system.console.bundles)[':name']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSystemConsoleBundlesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.system.console.bundles)[':name']['$post']>,
    ) {
      return parseResponse(client.system.console.bundles[':name'].$post(args, options))
    },
  })
}

export function injectPostSystemConsoleBundlesName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.system.console.bundles)[':name']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.system.console.bundles)[':name']['$post']>,
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
    const mutationDefaults = getPostSystemConsoleBundlesNameMutationOptions<
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

export function getSystemConsoleBundlesNameJsonQueryKey(
  args: InferRequestType<(typeof client.system.console.bundles)[':name.json']['$get']>,
) {
  return ['system', '/system/console/bundles/:name.json', args] as const
}

export function getSystemConsoleBundlesNameJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.system.console.bundles)[':name.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.system.console.bundles)[':name.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.system.console.bundles)[':name.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSystemConsoleBundlesNameJsonQueryKey>
  >({
    queryKey: getSystemConsoleBundlesNameJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.system.console.bundles[':name.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSystemConsoleBundlesNameJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.system.console.bundles)[':name.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.system.console.bundles)[':name.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.system.console.bundles)[':name.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSystemConsoleBundlesNameJsonQueryKey>
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
      ...getSystemConsoleBundlesNameJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getSystemConsoleConfigMgrQueryKey() {
  return ['system', '/system/console/configMgr'] as const
}

export function getSystemConsoleConfigMgrQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.system.console.configMgr.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.system.console.configMgr.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSystemConsoleConfigMgrQueryKey>
  >({
    queryKey: getSystemConsoleConfigMgrQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.system.console.configMgr.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSystemConsoleConfigMgr<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.system.console.configMgr.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.system.console.configMgr.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSystemConsoleConfigMgrQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSystemConsoleConfigMgrQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostSystemConsoleConfigMgrComAdobeGraniteAuthSamlSamlAuthenticationHandlerMutationKey() {
  return [
    'system',
    '/system/console/configMgr/com.adobe.granite.auth.saml.SamlAuthenticationHandler',
    'POST',
  ] as const
}

export function getPostSystemConsoleConfigMgrComAdobeGraniteAuthSamlSamlAuthenticationHandlerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.system.console.configMgr)['com.adobe.granite.auth.saml.SamlAuthenticationHandler']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.system.console.configMgr)['com.adobe.granite.auth.saml.SamlAuthenticationHandler']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostSystemConsoleConfigMgrComAdobeGraniteAuthSamlSamlAuthenticationHandlerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.system.console.configMgr)['com.adobe.granite.auth.saml.SamlAuthenticationHandler']['$post']
      >,
    ) {
      return parseResponse(
        client.system.console.configMgr[
          'com.adobe.granite.auth.saml.SamlAuthenticationHandler'
        ].$post(args, options),
      )
    },
  })
}

export function injectPostSystemConsoleConfigMgrComAdobeGraniteAuthSamlSamlAuthenticationHandler<
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
                  (typeof client.system.console.configMgr)['com.adobe.granite.auth.saml.SamlAuthenticationHandler']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.system.console.configMgr)['com.adobe.granite.auth.saml.SamlAuthenticationHandler']['$post']
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
      getPostSystemConsoleConfigMgrComAdobeGraniteAuthSamlSamlAuthenticationHandlerMutationOptions<
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

export function getPostSystemConsoleJmxComAdobeGraniteTypeRepositoryOpActionMutationKey() {
  return [
    'system',
    '/system/console/jmx/com.adobe.granite:type=Repository/op/:action',
    'POST',
  ] as const
}

export function getPostSystemConsoleJmxComAdobeGraniteTypeRepositoryOpActionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.system.console.jmx)['com.adobe.granite:type=Repository']['op'][':action']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.system.console.jmx)['com.adobe.granite:type=Repository']['op'][':action']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSystemConsoleJmxComAdobeGraniteTypeRepositoryOpActionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.system.console.jmx)['com.adobe.granite:type=Repository']['op'][':action']['$post']
      >,
    ) {
      return parseResponse(
        client.system.console.jmx['com.adobe.granite:type=Repository'].op[':action'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostSystemConsoleJmxComAdobeGraniteTypeRepositoryOpAction<
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
                  (typeof client.system.console.jmx)['com.adobe.granite:type=Repository']['op'][':action']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.system.console.jmx)['com.adobe.granite:type=Repository']['op'][':action']['$post']
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
      getPostSystemConsoleJmxComAdobeGraniteTypeRepositoryOpActionMutationOptions<
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

export function getSystemConsoleStatusProductinfoJsonQueryKey() {
  return ['system', '/system/console/status-productinfo.json'] as const
}

export function getSystemConsoleStatusProductinfoJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.system.console)['status-productinfo.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.system.console)['status-productinfo.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSystemConsoleStatusProductinfoJsonQueryKey>
  >({
    queryKey: getSystemConsoleStatusProductinfoJsonQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.system.console['status-productinfo.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSystemConsoleStatusProductinfoJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.system.console)['status-productinfo.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.system.console)['status-productinfo.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSystemConsoleStatusProductinfoJsonQueryKey>
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
      ...getSystemConsoleStatusProductinfoJsonQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getSystemHealthQueryKey(args: InferRequestType<typeof client.system.health.$get>) {
  return ['system', '/system/health', args] as const
}

export function getSystemHealthQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.health.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.system.health.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.health.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSystemHealthQueryKey>
  >({
    queryKey: getSystemHealthQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.system.health.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSystemHealth<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.health.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.system.health.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.health.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSystemHealthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSystemHealthQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostIntermediatePathAuthorizableIdKsHtmlMutationKey() {
  return [':intermediatePath', '/:intermediatePath/:authorizableId.ks.html', 'POST'] as const
}

export function getPostIntermediatePathAuthorizableIdKsHtmlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':intermediatePath'][':authorizableId.ks.html']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':intermediatePath'][':authorizableId.ks.html']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIntermediatePathAuthorizableIdKsHtmlMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':intermediatePath'][':authorizableId.ks.html']['$post']
      >,
    ) {
      return parseResponse(
        client[':intermediatePath'][':authorizableId.ks.html'].$post(args, options),
      )
    },
  })
}

export function injectPostIntermediatePathAuthorizableIdKsHtml<
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
                ReturnType<(typeof client)[':intermediatePath'][':authorizableId.ks.html']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':intermediatePath'][':authorizableId.ks.html']['$post']>,
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
    const mutationDefaults = getPostIntermediatePathAuthorizableIdKsHtmlMutationOptions<
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

export function getIntermediatePathAuthorizableIdKsJsonQueryKey(
  args: InferRequestType<(typeof client)[':intermediatePath'][':authorizableId.ks.json']['$get']>,
) {
  return [':intermediatePath', '/:intermediatePath/:authorizableId.ks.json', args] as const
}

export function getIntermediatePathAuthorizableIdKsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':intermediatePath'][':authorizableId.ks.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':intermediatePath'][':authorizableId.ks.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':intermediatePath'][':authorizableId.ks.json']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIntermediatePathAuthorizableIdKsJsonQueryKey>
  >({
    queryKey: getIntermediatePathAuthorizableIdKsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':intermediatePath'][':authorizableId.ks.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectIntermediatePathAuthorizableIdKsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':intermediatePath'][':authorizableId.ks.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':intermediatePath'][':authorizableId.ks.json']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':intermediatePath'][':authorizableId.ks.json']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIntermediatePathAuthorizableIdKsJsonQueryKey>
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
      ...getIntermediatePathAuthorizableIdKsJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getIntermediatePathAuthorizableIdKeystoreStoreP12QueryKey(
  args: InferRequestType<
    (typeof client)[':intermediatePath'][':authorizableId']['keystore']['store.p12']['$get']
  >,
) {
  return [
    ':intermediatePath',
    '/:intermediatePath/:authorizableId/keystore/store.p12',
    args,
  ] as const
}

export function getIntermediatePathAuthorizableIdKeystoreStoreP12QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':intermediatePath'][':authorizableId']['keystore']['store.p12']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':intermediatePath'][':authorizableId']['keystore']['store.p12']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':intermediatePath'][':authorizableId']['keystore']['store.p12']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIntermediatePathAuthorizableIdKeystoreStoreP12QueryKey>
  >({
    queryKey: getIntermediatePathAuthorizableIdKeystoreStoreP12QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':intermediatePath'][':authorizableId'].keystore['store.p12'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectIntermediatePathAuthorizableIdKeystoreStoreP12<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':intermediatePath'][':authorizableId']['keystore']['store.p12']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':intermediatePath'][':authorizableId']['keystore']['store.p12']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':intermediatePath'][':authorizableId']['keystore']['store.p12']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIntermediatePathAuthorizableIdKeystoreStoreP12QueryKey>
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
      ...getIntermediatePathAuthorizableIdKeystoreStoreP12QueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostPathIndexMutationKey() {
  return [':path', '/:path/', 'POST'] as const
}

export function getPostPathIndexMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':path']['index']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)[':path']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPathIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':path']['index']['$post']>) {
      return parseResponse(client[':path'].index.$post(args, options))
    },
  })
}

export function injectPostPathIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':path']['index']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)[':path']['index']['$post']>,
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
    const mutationDefaults = getPostPathIndexMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPathNameQueryKey(
  args: InferRequestType<(typeof client)[':path'][':name']['$get']>,
) {
  return [':path', '/:path/:name', args] as const
}

export function getPathNameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':path'][':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':path'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':path'][':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPathNameQueryKey>
  >({
    queryKey: getPathNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':path'][':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPathName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':path'][':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':path'][':name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':path'][':name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPathNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPathNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostPathNameMutationKey() {
  return [':path', '/:path/:name', 'POST'] as const
}

export function getPostPathNameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':path'][':name']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)[':path'][':name']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPathNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':path'][':name']['$post']>) {
      return parseResponse(client[':path'][':name'].$post(args, options))
    },
  })
}

export function injectPostPathName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':path'][':name']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)[':path'][':name']['$post']>,
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
    const mutationDefaults = getPostPathNameMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeletePathNameMutationKey() {
  return [':path', '/:path/:name', 'DELETE'] as const
}

export function getDeletePathNameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':path'][':name']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)[':path'][':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePathNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':path'][':name']['$delete']>) {
      return parseResponse(client[':path'][':name'].$delete(args, options))
    },
  })
}

export function injectDeletePathName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':path'][':name']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)[':path'][':name']['$delete']>,
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
    const mutationDefaults = getDeletePathNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostPathNameRwHtmlMutationKey() {
  return [':path', '/:path/:name.rw.html', 'POST'] as const
}

export function getPostPathNameRwHtmlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':path'][':name.rw.html']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':path'][':name.rw.html']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPathNameRwHtmlMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':path'][':name.rw.html']['$post']>) {
      return parseResponse(client[':path'][':name.rw.html'].$post(args, options))
    },
  })
}

export function injectPostPathNameRwHtml<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':path'][':name.rw.html']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':path'][':name.rw.html']['$post']>,
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
    const mutationDefaults = getPostPathNameRwHtmlMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
