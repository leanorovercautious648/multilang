import type { Command } from '../../types/command.js';
import { t } from '../../utils/i18n.js';
import { SlashCommandBuilder } from 'discord.js';

const pingCommand: Command = {
    get data() {
        return new SlashCommandBuilder()
            .setName('ping')
            .setDescription(t('ping_description'));
    },
    async execute(interaction) {
        const lng = interaction.locale.split('-')[0] || 'en';
        const latency = Date.now() - interaction.createdTimestamp;
        await interaction.reply({ content: t('ping_response', { latency, lng }) });
    },
};

export default pingCommand;
