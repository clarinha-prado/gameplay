import React from 'react';

import {
    View,
    Text
} from 'react-native';

import { styles } from './styles';

import { Avatar } from '../Avatar';
import { theme } from '../../global/styles/theme';

export type MemberProps = {
    id: string;
    username: string;
    avatar_url: string;
    status: string;
}

type Props = {
    data: MemberProps;
}

export function Member({ data }: Props) {
    const { on, primary } = theme.colors;
    const isOnline = data.status === 'online';

    return (
        <View style={styles.container}>
            <Avatar urlImage={data.avatar_url} />

            <View>
                <Text style={styles.title}>
                    {data.username}
                </Text>

                <View style={styles.status}>
                    <View
                        // aqui são usadas as duas formas de estilização: styled components e 
                        // JSX styles, para combinar as duas formas foi usado um array, o styled
                        // components é estilizado com o nome do componente "styles" seguido do nome
                        // do estilo, o estilo JSX deve ser sempre colocado dentro de {} e usa o nome
                        // da propriedade "backgroundColor"
                        style={[
                            styles.bulletStatus,
                            {
                                backgroundColor: isOnline ? on : primary
                            }
                        ]}
                    />

                    <Text style={styles.nameStatus}>
                        {isOnline ? 'Disponível' : 'Ocupado'}
                    </Text>
                </View>
            </View>
        </View>
    );
}