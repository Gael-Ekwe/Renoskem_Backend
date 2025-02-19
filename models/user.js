const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
	
	name: {type: String, required: true},
	email: {type: String, required: true, unique: true},
	password: {type: String, required: true},                                                    // modèle de l'utilisateur
	avatar: { type: String, default: null},
    skills: {type: mongoose.Schema.Types.ObjectId, ref:'skills', default: null}, // [{ niveau dans chaque corps de métier}]  ss document expertiselevel
	projects: { type: [{type: mongoose.Schema.Types.ObjectId, ref:'projects'}], default: []}, 
    teammates: { type: [{type: mongoose.Schema.Types.ObjectId, ref:'teammates'}], default: []}, 
    artisans: { type: [{type: mongoose.Schema.Types.ObjectId, ref:'artisans'}], default: []}, 
	token: {type: String, required: true}
});

const User = mongoose.model('users', userSchema);

module.exports = User;


