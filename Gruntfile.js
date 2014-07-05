module.exports = function (grunt) {
	grunt.loadNpmTasks("grunt-contrib-less");
	grunt.loadNpmTasks("grunt-contrib-watch");

	grunt.initConfig({
		less: {
			src: {
				expand: true,
				cwd: "css",
				src: ["**/*.less"],
				dest: "css",
				ext: ".css"
			}
		},
		watch: {
			files: ["css/**/*.less"],
			tasks: ["less"]
		}
	});
};