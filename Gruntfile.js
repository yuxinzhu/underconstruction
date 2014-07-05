module.exports = function (grunt) {
	grunt.loadNpmTasks("grunt-contrib-less");
	grunt.loadNpmTasks("grunt-contrib-watch");

	grunt.initConfig({
		less: {
			src: {
				expand: true,
				cwd: "public/css",
				src: ["**/*.less"],
				dest: "public/css",
				ext: ".css"
			}
		},
		watch: {
			files: ["public/css/**/*.less"],
			tasks: ["less"]
		}
	});
};