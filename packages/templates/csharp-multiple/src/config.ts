import * as type from './type.handlebars';
import * as enumTemplate from '../../typescript/src/enum.handlebars';
import * as scalar from './scalar.handlebars';
import * as union from './union.handlebars';
import * as operation from './operation.handlebars';
import * as fragment from './fragment.handlebars';
import * as selectionSet from '../../typescript/src/selection-set.handlebars';
import * as fragments from './fragments.handlebars';
import { EInputType, GeneratorConfig } from 'graphql-codegen-core';
import { getType } from './helpers/get-type';
import { getOptionals } from './helpers/get-optionals';

export const config: GeneratorConfig = {
  inputType: EInputType.MULTIPLE_FILES,
  templates: {
    type,
    inputType: type,
    enum: enumTemplate,
    interface: type,
    scalar,
    union,
    operation,
    fragment,
    selectionSet,
    fragments
  },
  flattenTypes: true,
  primitives: {
    String: 'string',
    Int: 'int',
    Float: 'float',
    Boolean: 'bool',
    ID: 'string'
  },
  customHelpers: {
    convertedType: getType,
    getOptionals
  },
  filesExtension: 'cs',
  deprecationNote: ''
};
