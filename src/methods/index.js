import validator from 'validator';
import {v1, v3, v4, v5} from 'uuid';

const methods = [
    {
        type: 'v1',
        value: () => v1(),
    },
    {
        type: 'v3',
        value: (key, namespace = v3.DNS) => validator.isUUID(namespace) ? v3(key, namespace) : '',
    },
    {
        type: 'v4',
        value: (...i) => v4(...i),
    },
    {
        type: 'v5',
        value: (key, namespace = v3.URL) => validator.isUUID(namespace) ? v5(key, namespace) : '',
    },
];

export default methods;
