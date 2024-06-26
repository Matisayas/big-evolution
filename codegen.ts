import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'src/modules/**/*.graphql',

  generates: {
    'src/generated/graphql.ts': {
      plugins: ['typescript', 'typescript-resolvers'],
      config: {
        typesPrefix: 'Gql',
        enumsAsConst: true,
        scalars: {
          Date: 'Date',
        },
      },
    },
  },
};

export default config;
