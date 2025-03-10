import QRcode from 'qrcode';

export const generateQRcode = async (req, res) => {
	const { text } = req.query;
	if (!text) {
		return res.status(400).send('É necessário enviar um texto ou URL');
	}

	try {
		// Gera o QR Code como uma imagem PNG
		const qrCodeImage = await QRcode.toBuffer(text);

		// Define o cabeçalho para enviar a imagem PNG
		res.setHeader('Content-Type', 'image/png');

		// Envia a imagem gerada diretamente
		res.status(200).send(qrCodeImage);
	} catch (error) {
		res.status(500).send('Erro ao gerar o QR Code');
	}
};
